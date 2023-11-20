import { Component, OnInit } from '@angular/core';
import { ChildrenService } from '../services/children.service'; 
import { Children } from '../models/children-model'; 
import { Tasks } from '../models/tasks.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-profile-child',
  templateUrl: './profile-child.component.html',
  styleUrls: ['./profile-child.component.scss']
})
export class ProfileChildComponent implements OnInit {
  childrenList: Children[] = [];
  tasksList: Tasks[] = [];
  tasksService: any;

  constructor(private childrenService: ChildrenService, tasksService: TasksService) { }

  ngOnInit(): void {
    this.getAll();
    thisgetAllTasks();
  }

  getAll() {
    this.childrenService.getAll().subscribe(
      (children: Children[]) => {
        this.childrenList = children;
      },
      (error: any) => { 
        console.error('Erreur lors de la récupération des enfants', error);
      }
    );
  }

  getById(id: number) {
    this.childrenService.getById(id).subscribe(
      (child: Children) => {
        
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de l\'enfant', error);
      }
    );
  }

  update(id: number, child: Children) {
    this.childrenService.update(id, child).subscribe(
      (updatedChild: Children) => {
      },
      (error: any) => {
        console.error('Erreur lors de la modification de l\'enfant', error);
      }
    );
  }

  deleteChild(id: number) {
    this.childrenService.delete(id).subscribe(
      () => {
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de l\'enfant', error);
      }
    );
  }
 
//Methodes pour tasks

  addTaskToChild(childId: number, task: any) { // Assure-toi que Task est bien défini
    this.childrenService.addTaskToChild(childId, task).subscribe(
      (updatedChild: Children) => {
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la tâche à l\'enfant', error);
      }
    );
  }

  getAllTasks() {
    this.tasksService.getAll().subscribe(
      (tasks: Tasks[]) => {
        this.tasksList = tasks;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des tâches', error);
      }
    );
  }

  getTaskById(id: number) {
    this.tasksService.getById(id).subscribe(
      (task: Tasks) => {
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de la tâche', error);
      }
    );
  }

  createTask(task: Tasks) {
    this.tasksService.create(task).subscribe(
      (newTask: Tasks) => {
        this.tasksList.push(newTask); 
      },
      (error: any) => {
        console.error('Erreur lors de la création de la tâche', error);
      }
    );
  }

  updateTask(id: number, task: Tasks) {
    this.tasksService.update(id, task).subscribe(
      (updatedTask: Tasks) => {
      },
      (error: any) => {
        console.error('Erreur lors de la modification de la tâche', error);
      }
    );
  }
}

function thisgetAllTasks() {
  throw new Error('Function not implemented.');
}

