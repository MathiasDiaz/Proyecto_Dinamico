import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioComponent } from './componentes/incio/incio.component';

const routes: Routes = [
  {path:'',component: IncioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
