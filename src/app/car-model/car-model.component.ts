import { Component, OnInit } from '@angular/core';

import { Manufacturer } from '../shared';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css']
})
export class CarModelComponent implements OnInit {
	
	manufacturers: Manufacturer[] = [];
	
	constructor() { }
	
	ngOnInit() {
		
	}

}
