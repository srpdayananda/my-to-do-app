import { IUser } from './../shared/interfaces/user.interface';
import { UserService } from './../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: IUser;
  users: Array<IUser>;
  constructor(private router: Router, private userService: UserService) {
    this.user = {
      name: '',
      email: '',
    };
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  gotoTask(): void {
    this.router.navigate(['task']);
  }

  saveUser(): void {
    if (this.user._id) {
      this.userService.update(this.user).subscribe(() => {
        this.user = {
          name: '',
          email: '',
        };
        this.getUsers();
      });
    } else {
      this.userService.create(this.user).subscribe(() => {
        this.user = {
          name: '',
          email: '',
        };
        this.getUsers();
      });
    }
  }

  getUsers(): void {
    this.userService.get().subscribe((users) => {
      this.users = users;
    });
  }

  selectUser(user: IUser): void {
    this.user = user;
  }

  deleteUser(id?: string): void {
    if (id) {
      this.userService.delete(id).subscribe(() => {
        this.getUsers();
      });
    }
  }
}
