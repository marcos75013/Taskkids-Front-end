import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Children } from '../models/children-model'; // Assure-toi d'avoir un modèle Child correspondant

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  private apiUrl = 'http://localhost:8080/children'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Children[]> {
    return this.http.get<Children[]>(this.apiUrl);
  }

  getById(id: number): Observable<Children> {
    return this.http.get<Children>(`${this.apiUrl}/${id}`);
  }

  update(id: number, child: Children): Observable<Children> {
    return this.http.put<Children>(`${this.apiUrl}/${id}`, child);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addTaskToChild(childId: number, task: any): Observable<Children> { 
    return this.http.post<Children>(`${this.apiUrl}/${childId}/add-task`, task);
  }
}
