import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerUpdateComponent } from './components/product/costumer-update/costumer-update.component';
import { HomeComponent } from './views/home/home.component';
import { CostumerCrudComponent } from './views/costumer-crud/costumer-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "costumers-list",
    component: CostumerCrudComponent
  },
  {
    path: "costumer/update/:id",
    component: CostumerUpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
