import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // children: [
    //   {
    //     path: '',
    //     component: UsersListComponent,
    //   },
    //   {
    //     path: 'add',
    //     component: UserFormComponent
    //   },
    //   {
    //     path: ':id',
    //     component: UserFormComponent,
    //     canDeactivate: [CanDeactivateGuard],
    //     resolve: {
    //       user: UserResolveGuard
    //     }
    //   },
    // ]
  },
];

// export let usersRouterComponents = [UsersComponent, UserFormComponent, UsersListComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  // providers: [
  //   UserResolveGuard,
  //   CanDeactivateGuard
  // ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
