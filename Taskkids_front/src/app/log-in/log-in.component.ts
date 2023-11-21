

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParentsService } from '../services/parents.service';
import { Router } from '@angular/router';
import { Parents } from '../models/parents-model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  errorMessage: string = '';

  constructor(private parentsService: ParentsService, private router : Router) { }
 
    onSubmit()  {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        this.parentsService.login(email ?? '', password ?? '').subscribe((response : Parents) =>  {
            if (response) {
              console.log('Connexion réussie');
              console.log(response);
              let user = new Parents(response.id, response.email, response.password, (response.nickname as string), response.picture, response.children);
              console.log(JSON.stringify(user));
              localStorage.setItem('user', JSON.stringify(user));
              this.router.navigate(['/profile-parent']);

            } else {
              this.errorMessage = 'Identifiants incorrects';
            }
          },
        );
      } else {
        this.errorMessage = 'Veuillez remplir correctement tous les champs';
      }

  }
}