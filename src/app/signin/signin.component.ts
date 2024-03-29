import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  isAuthenticated: boolean;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit() { }

  loginUser() {
    this.authService.signIn(this.signinForm.value);
    this.isAuthenticated = true;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
