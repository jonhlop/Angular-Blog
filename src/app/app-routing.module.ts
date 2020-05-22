import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'blog'},
  {path: 'blog', component: BlogComponent},
  {path: 'new', component: NewComponent},
  {path: '**', redirectTo: 'blog'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
