import { Component, OnInit } from '@angular/core';
import {first} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private appService : AppService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  register() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Check if passwords match
    if (this.f.password.value !== this.f.confirmPassword.value) {
      this.error = "Passwords do not match";
      return;
    }

    this.loading = true;

    // Create an object with form values
    const formData = {
      username: this.f.username.value,
      password: this.f.password.value,
      confirmPassword: this.f.confirmPassword.value
    };

    // Send form data to the service
    this.appService.register(formData)
        .subscribe(
            data => {
              this.router.navigate(['/examples/login']);
              
            },
            error => {
              console.log(error)
              this.error = error;
              this.loading = false;
            });
  }

}
