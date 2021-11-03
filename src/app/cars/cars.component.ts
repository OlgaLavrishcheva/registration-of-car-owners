import { Component, OnInit } from '@angular/core';
import {Car} from '../../cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  car: Car = {
    aCarId: 1,
    aCarNumber: 'AX2121HP',
    aCarBrand: 'Hyundai',
    aCarModel: 'Accent',
    aCarProduction: 2009
  };

  constructor() { }

  ngOnInit(): void {
  }

}
