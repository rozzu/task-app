import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDetailComponent } from './posts-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: ':id', component: PostsDetailComponent },
];

@NgModule({
  declarations: [
    PostsDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class PostsDetailModule { }
