import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// library
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Component and Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { CarModelComponent } from './car-model/car-model.component';
import { InventoryComponent } from './inventory/inventory.component';


import { CarModel } from './shared';
import { Manufacturer } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    ManufactureComponent,
    CarModelComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MatInputModule,
	MatButtonModule,
	MatSelectModule,
	MatMenuModule,
	MatTableModule,
	MatFileUploadModule,
	BrowserAnimationsModule
  ],
  providers: [CarModel, Manufacturer],
  bootstrap: [AppComponent]
})
export class AppModule { }
