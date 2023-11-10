import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileParentComponent } from './profile-parent/profile-parent.component';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { FooterComponent } from './footer/footer.component';
import { CGUComponent } from './cgu/cgu.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';


const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'header' , component: HeaderComponent},
  { path: 'main-page', component: MainPageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component: LogInComponent},
  { path: 'profile-parent', component: ProfileParentComponent },
  { path: 'profile-child', component: ProfileChildComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'cgu', component: CGUComponent },
  { path: 'politique-confidentialite', component: PolitiqueConfidentialiteComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


