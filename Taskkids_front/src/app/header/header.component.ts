import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HideHeaderService } from '../hide-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
goHome() {
  this.router.navigate(['/profile-parent']);
}



  isLoggedIn = false;
  displayHeader = true;
  constructor(private router : Router, public hideHeaderService : HideHeaderService) { }

  scrollTo(anchor: string){
    const element = document.querySelector(anchor);
    element?.scrollIntoView({behavior: "smooth"})
  }
  toPage(page: string) {
    console.log("/" + this.router.url.split('/').pop());
    if(page != "/" + this.router.url.split('/').pop()) {
      this.router.navigateByUrl(page);
    } else {
      location.reload();
    }
    
  }
  


}
