import {Component, OnInit} from '@angular/core';
import {Owner} from '../../owner';
import {OWNERS} from '../mock-owners';
import {Car} from '../../cars';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  owners = OWNERS;
  selectedOwner?: Owner;

  car: Car = {
    aCarId: 1,
    aCarNumber: 'AX2121HP',
    aCarBrand: 'Hyundai',
    aCarModel: 'Accent',
    aCarProduction: 2009
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(owner: Owner): void {
    this.selectedOwner = owner;
  }
}
