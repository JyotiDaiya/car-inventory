import { Component, OnInit } from '@angular/core';

import { Manufacturer } from '../shared';
import { ManufacturerService } from '../shared';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css']
})
export class CarModelComponent implements OnInit {
	
	manufacturers: Manufacturer[] = [];
	
	imgpreview;
	
	constructor(private m: ManufacturerService) { 
	
		m.getManufacturer().subscribe((res) => {
			
			this.manufacturers = res;
			
		});
	
	}
	
	ngOnInit() {
		
	}
	
	public fileChangeEvent(fileInput: any){
		if (fileInput.target.files && fileInput.target.files[0]) {
			const reader = new FileReader();
			
			reader.onload = ((e) => {
				this.imgpreview = e.target['result'];
			});
			
			reader.readAsDataURL(fileInput.target.files[0]);
		}
	}

}
