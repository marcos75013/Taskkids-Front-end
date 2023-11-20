import { Component, OnInit } from '@angular/core';
import { ParentsService } from '../services/parents.service';

@Component({
  selector: 'app-profile-parent',
  templateUrl: 'profile-parent.component.html',
  styleUrls: ['profile-parent.component.scss']
})
export class ProfileParentComponent implements OnInit{
  parents: ParentsService[] = [];

  constructor(private parentsService: ParentsService) { }


  
  ngOnInit(): void {
    this.getAll();
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