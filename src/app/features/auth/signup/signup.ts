import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupStepper } from './components/signup-stepper/signup-stepper';

@Component({
  selector: 'app-signup',
  imports: [
    RouterOutlet, 
    SignupStepper,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {}
