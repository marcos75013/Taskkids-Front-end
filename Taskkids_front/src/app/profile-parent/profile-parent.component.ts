import { Component, OnInit } from '@angular/core';
import { ParentsService } from '../services/parents.service';
import { Parents } from '../models/parents-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-parent',
  templateUrl: 'profile-parent.component.html',
  styleUrls: ['profile-parent.component.scss']
})
export class ProfileParentComponent implements OnInit{
  addChild() {
  this.router.navigate(['/add-child']);
}
  showNicknameParent: boolean = true;

  openInputNicknameParent() {
  this.showNicknameField = !this.showNicknameField;
}
  showNicknameField: boolean = false;
  goToChildProfile() {
  this.router.navigate(['/profile-child']);

}
profile: any;

  parents: ParentsService[] = [];

  constructor(private parentsService: ParentsService, private router: Router) { }

  parent! : Parents ; 

  
  ngOnInit(): void {
    this.parent = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.parent);
    
    this.getById(1);
  }

  getAll() {
    this.parentsService.getAll().subscribe(
      (response: any) => {
        this.parents = response;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des parents', error);
      }
      
    );
  }

  getById(id: number) {
    this.parentsService.getById(id).subscribe(
      (response: any) => {
        this.parents = response;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du parent', error);
      }
    );
  }

  create(parents: any) {
    this.parentsService.create(parents).subscribe(
      (response: any) => {
        this.parents = response;
      },
      (error: any) => {
        console.error('Erreur lors de la création du parent', error);
      }
    );
  }

  update(id: number, parents: any) {
    this.parentsService.update(id, parents).subscribe(
      (response: any) => {
        this.parents = response;
      },
      (error: any) => {
        console.error('Erreur lors de la modification du parent', error);
      }
    );
  }

  addChildToParent(parentId: number, child: any) {
    this.parentsService.addChildToParent(parentId, child).subscribe(
      (response: any) => {
        this.parents = response;
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de l\'enfant au parent', error);
      }
    );
  }


}