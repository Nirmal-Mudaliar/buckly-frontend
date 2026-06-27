import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-signup-stepper',
  imports: [
    StepperModule,
    ButtonModule,
  ],
  templateUrl: './signup-stepper.html',
  styleUrl: './signup-stepper.scss',
})
export class SignupStepper {
  initialLoadIndex = input<number>(0);
}
