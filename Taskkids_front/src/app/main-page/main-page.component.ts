
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
goToForm(arg0: string) {
  this.router.navigate(['/log-in']);
}
  constructor(private router: Router) {
    //this.router.navigate(['/log-in']);
  }
  

}
