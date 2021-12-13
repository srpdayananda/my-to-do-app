import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  create(task: ITask): Observable<ITask> {
    return this.http.post<ITask>('http://localhost:3000/task', task);
  }
  get(userId: string | null): Observable<Array<ITask>> {
    let params = {};
    if (userId) {
      params = new HttpParams().append('userId', userId);
    }
    return this.http.get<Array<ITask>>('http://localhost:3000/task', {
      params,
    });
  }
  update(task: ITask): Observable<ITask>{
    return this.http.put<ITask>('http://localhost:3000/task', task)
  }
  delete(id: string): Observable<ITask> {
    const params = new HttpParams().append('id', id);
    return this.http.delete<ITask>('http://localhost:3000/task', { params });
  }
}
