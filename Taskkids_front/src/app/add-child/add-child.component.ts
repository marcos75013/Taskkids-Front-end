import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildrenService } from '../services/children.service';
import { ParentsService } from '../services/parents.service';
import { Children } from '../models/children-model';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {

  addChildForm!: FormGroup;
 
  /*nickname: new FormControl('', [Validators.required]),
  age: new FormControl('', [Validators.required]),
  gender: new FormControl('', [Validators.required]),
  picture: new FormControl('')*/
  

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private childrenService: ChildrenService,
    private parentsService: ParentsService
    ) { }

ngOnInit() {
 this.addChildForm = this.formBuilder.group({
  nickname: ['', [Validators.required]],
  age: ['', [Validators.required]],
  gender: ['', [Validators.required]],
  picture: [''],

  });
}

onSubmit() {
  if (this.addChildForm.invalid) {
    console.log(this.addChildForm.value);
    return;
  }

  const parentId = Number(localStorage.getItem('parentId'));
  const childData = this.addChildForm.value; 

  this.parentsService.addChildToParent(parentId, childData).subscribe(
    (response: Children) => {
      console.log('Enfant ajouté', response);
      this.router.navigate(['/profile-parent']);
    },
    (error: any) => {
      console.error('Erreur lors de l’ajout de l’enfant', error);
    }
  );
}


}

