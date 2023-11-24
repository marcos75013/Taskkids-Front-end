import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  addChildForm: FormGroup = new FormGroup({
    nickname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    picture: new FormControl(''),
  });

  childrenList: Children[] = [];
  child!: Children;

 
  

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
console.log(localStorage.getItem('parentId'));

  if (this.addChildForm.invalid) {
    console.log(this.addChildForm.value);
    return;
  }

  const parentId=localStorage.getItem('parentId');
  const childData = this.addChildForm.value; 

  this.parentsService.addChildToParent(parentId,childData).subscribe(
    (response: Children) => {
      
      
      this.childrenList.push(childData);
    },
    (error: any) => {
      console.error('Erreur lors de l’ajout de l’enfant', error);
    }
  );
}






}

