import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './log-in/log-in.component';
import { ProfileParentComponent } from './profile-parent/profile-parent.component';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { FooterComponent } from './footer/footer.component';
import { CGUComponent } from './cgu/cgu.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddChildComponent } from './add-child/add-child.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignInComponent,
    LoginComponent,
    ProfileParentComponent,
    ProfileChildComponent,
    FooterComponent,
    CGUComponent,
    PolitiqueConfidentialiteComponent,
    HeaderComponent,
    AddChildComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ButtonModule,
    TagModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
