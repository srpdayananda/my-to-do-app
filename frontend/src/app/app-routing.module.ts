import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'' , pathMatch:'full', redirectTo:'user'},
  {path:'user', component: UserComponent},
  {path:'task', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
