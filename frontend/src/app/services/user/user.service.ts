import { IUser } from './../../shared/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/user', user);
  }
  get(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>('http://localhost:3000/user');
  }
  update(user: IUser): Observable<IUser> {
    return this.http.put<IUser>('http://localhost:3000/user', user);
  }
  delete(id: string): Observable<IUser> {
    const params = new HttpParams().append('id', id);
    return this.http.delete<IUser>('http://localhost:3000/user', { params });
  }
}
