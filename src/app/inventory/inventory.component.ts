import { Component, OnInit } from '@angular/core';

import { MODEL_DATA } from '../shared';
import { MANUFACTURER_DATA } from '../shared';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
	
	//table column name
	displayedColumns: string[] = ['id', 'manufactureId', 'name', 'count'];
	// table records
	dataSource = MODEL_DATA;
	
	constructor() { }
	
	ngOnInit() {
		
	}
	
	// GET Manufacturer name
	// PARAM: Manufacturer ID(number)
	// RETURN: Manufacturer Name(string)
	getManufactururName(id:number): string {
		return MANUFACTURER_DATA.filter((item) => item.id == id)[0].name;
	}

}