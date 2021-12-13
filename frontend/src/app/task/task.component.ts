import { UserService } from './../services/user/user.service';
import { TaskService } from './../services/task/task.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../shared/interfaces/task.interface';
import { IUser } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  users: Array<IUser>;
  tasks: Array<ITask>;
  task: ITask;
  selectedUserId: string = '';
  constructor(
    private router: Router,
    private taskService: TaskService,
    private userService: UserService
  ) {
    this.users = [];
    this.tasks = [];
    this.task = {
      title: '',
      userId: '',
    };
  }

  ngOnInit(): void {
    this.getTasks(null);
    this.getUsers();
  }

  gotoUser(): void {
    this.router.navigate(['user']);
  }
  getUsers(): void {
    this.userService.get().subscribe((users) => {
      this.users = users;
    });
  }
  saveTask(): void {
    if (this.task._id) {
      this.taskService.update(this.task).subscribe(() => {
        this.task = {
          title: '',
          userId: '',
        };
        this.getTasks(null);
      });
    } else {
      this.taskService.create(this.task).subscribe(() => {
        this.task = {
          title: '',
          userId: '',
        };
        this.getTasks(null);
      });
    }
  }

  onChange(): void {
    if (this.selectedUserId) {
      this.getTasks(this.selectedUserId);
    } else {
      this.getTasks(null);
    }
  }

  selectTask(task: ITask): void {
    this.task = task;
  }

  deleteTask(id?: string) {
    if (id) {
      this.taskService.delete(id).subscribe(() => {
        this.getTasks(null);
      });
    }
  }

  getTasks(userId: string | null): void {
    this.taskService.get(userId).subscribe((tasks: Array<ITask>) => {
      this.tasks = tasks;
    });
  }
}
