import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{BaseComponent} from './base/base.component';
import { Base2Component } from './base2/base2.component';

const routes: Routes = [
 { path:'',component:BaseComponent},
 { path:'pagina2', component:Base2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
