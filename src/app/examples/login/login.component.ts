import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AppService } from 'app/app.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';



    data : Date = new Date();
    focus;
    focus1;

    constructor(   private formBuilder: FormBuilder, private route: ActivatedRoute,
                   private appService : AppService,
                   private router: Router,
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.appService.logout();


        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


        // var body = document.getElementsByTagName('body')[0];
        // body.classList.add('login-page');
        //
        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.add('navbar-transparent');
    }

    // login(){
    //     this.appService.islogedIn.next(true);
    // }
    get f() { return this.loginForm.controls; }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    login(){

        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.appService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("herree ",data)
                    this.router.navigate([this.returnUrl]);
                    // this.router.navigate(['/home']);

                },
                error => {
                    console.log("eroor ",error)
                    this.error = "You are not authorized to access. Please verify your credentials";
                    this.loading = false;
                });
    }
    // register(body){
    //
    //     return this.http.post<any>(environment.apiUrl,body)
    //     // return this.http.post(" http://127.0.0.1:8000/signup/",body)
    // }
    createAccount() {
        console.log("herre ")
        this.router.navigate(['createAccount']);
    }
}
