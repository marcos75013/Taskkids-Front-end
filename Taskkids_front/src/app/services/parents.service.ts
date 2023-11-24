import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parents } from '../models/parents-model';
import { Children } from '../models/children-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
  private apiUrl = 'http://localhost:8080/parents'; 
nickname: any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Parents[]> {
    return this.http.get<Parents[]>(this.apiUrl);
  }

  getById(id: number): Observable<Parents> {
    return this.http.get<Parents>(`${this.apiUrl}/${id}`);
  }

  create(parents: Parents): Observable<Parents> {
    return this.http.post<Parents>(this.apiUrl, parents);
  }

  update(id: number, parents: Parents): Observable<Parents> {
    return this.http.put<Parents>(`${this.apiUrl}/${id}`, parents);
  }

  addChildToParent(parentId: any, child: Children): Observable<Children> {
    return this.http.post<Children>(`${this.apiUrl}/${parentId}/add-child`, child);
  }

  login(email: string, password: string): Observable<Parents> {
    return this.http.post<Parents>(this.apiUrl + '/login', { email, password });

}
}
