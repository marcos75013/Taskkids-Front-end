import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Children } from '../models/children-model'; 
import { Tasks } from '../models/tasks.model';
@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  /*create(value: any) {
    throw new Error('Method not implemented.');
  }*/
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

  addTaskToChild(childId: number, task: Tasks): Observable<Children> {
    return this.http.post<Children>(`${this.apiUrl}/${childId}/add-task`, task);
  }

  getTasksByChildId(childId: number): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.apiUrl}/${childId}/tasks`);
  }

  create(child: Children): Observable<Children> {
    return this.http.post<Children>(this.apiUrl, child);
  }

  updateChildScore(childId: number, childData: Children): Observable<Children> {
  return this.http.patch<Children>(`${this.apiUrl}/children/${childId}`, childData);
}

  
}
