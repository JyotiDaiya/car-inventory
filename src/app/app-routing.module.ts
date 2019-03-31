import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { CarModelComponent } from './car-model/car-model.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
	{	path: 'manufacturer', component: ManufactureComponent },
	{	path: 'model', component: CarModelComponent },
	{	path: 'inventory', component: InventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
