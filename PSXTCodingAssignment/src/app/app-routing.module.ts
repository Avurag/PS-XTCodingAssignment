import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexprogramComponent } from './spacexprogram/spacexprogram.component';


const routes: Routes = [
  {
    path: '',
    component: SpacexprogramComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
