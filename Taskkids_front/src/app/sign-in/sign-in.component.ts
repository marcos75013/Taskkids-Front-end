

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ParentsService } from '../services/parents.service'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private parentsService: ParentsService) { } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchingFields('password', 'confirmPassword') });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.parentsService.create(this.registerForm.value).subscribe(
      (response: any) => {
        console.log('Inscription réussie', response);
      },
      (error: any) => { 
        console.error('Erreur lors de l’inscription', error);
      }
    );
  }

  matchingFields(field1: string, field2: string) {
    return (formGroup: FormGroup) => {
      const input1 = formGroup.controls[field1];
      const input2 = formGroup.controls[field2];

      if (input2.errors && !input2.errors['mustMatch']) {
        return;
      }

      if (input1.value !== input2.value) {
        input2.setErrors({ mustMatch: true });
      } else {
        input2.setErrors(null);
      }
    };
  }
}

function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.value;
  if (!password) return null;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumeric = /[0-9]/.test(password);
  const validLength = password.length >= 8;

  if (!hasUpperCase || !hasLowerCase || !hasNumeric || !validLength) {
    return { 'passwordComplexity': true };
  }

  return null;
}



