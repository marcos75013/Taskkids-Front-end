import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileParentComponent } from './profile-parent/profile-parent.component';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { FooterComponent } from './footer/footer.component';
import { CGUComponent } from './cgu/cgu.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignInComponent,
    LogInComponent,
    ProfileParentComponent,
    ProfileChildComponent,
    FooterComponent,
    CGUComponent,
    PolitiqueConfidentialiteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
