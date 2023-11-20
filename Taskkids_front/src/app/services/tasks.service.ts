import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from '../models/tasks.model'; // Assure-toi d'avoir un modèle Task correspondant

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:8080/tasks'; // Remplace par l'URL appropriée

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.apiUrl}/${id}`);
  }

  create(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.apiUrl, task);
  }

  update(id: number, task: Tasks): Observable<Tasks> {
    return this.http.put<Tasks>(`${this.apiUrl}/${id}`, task);
  }
}

