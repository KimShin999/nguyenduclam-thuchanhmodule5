import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatbookComponent } from './creatbook/creatbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DetailbookComponent } from './detailbook/detailbook.component';
import { ListbookComponent } from './listbook/listbook.component';

const routes: Routes = [
  {path: '', component:ListbookComponent},
  {path: 'create', component: CreatbookComponent},
  {path: 'detail/:id', component: DetailbookComponent},
  {path: 'delete/:id', component: DeletebookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
