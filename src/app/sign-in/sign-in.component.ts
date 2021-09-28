import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    userForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  constructor() {
  }

  ngOnInit(): void {
  }

  storage() {
    localStorage.emailSingIn = JSON.stringify(this.userForm.get('email')?.value);
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

}
