import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersResolver } from './resolvers';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  },
  {
    path: ':page',
    resolve: {
      usersList: UsersResolver,
    },
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
