import {Component, OnInit} from '@angular/core';
import {Owner} from '../../owner';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  owner: Owner = {
    aOwnerId: 1,
    aLastName: 'Иванов',
    aFirstName: 'Иван',
    aMiddleName: 'Иваныч'
  };

  constructor() { }

  ngOnInit() {
  }
}
