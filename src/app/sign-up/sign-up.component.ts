import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  userForm: FormGroup;

  constructor() {
    this.userForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  storage() {
    localStorage.nameSignUp = JSON.stringify(this.userForm.get('name')?.value);
    localStorage.emailSingUp = JSON.stringify(this.userForm.get('email')?.value);
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

}
