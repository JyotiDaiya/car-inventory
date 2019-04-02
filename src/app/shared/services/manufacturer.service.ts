import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
	
	baseUrl = 'assets/data/';
	
	
	constructor(private http: HttpClient) { }
	
	getManufacturer() {
		
		return this.http.get(this.baseUrl + 'config.json');
		
	}
  
}
