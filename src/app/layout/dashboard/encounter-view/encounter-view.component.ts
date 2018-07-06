import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {Encounter} from '../../../model/encounter';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-encounter-view',
  templateUrl: './encounter-view.component.html',
  styleUrls: ['./encounter-view.component.css']
})
export class EncounterViewComponent implements OnInit {

  encounters = [];

  selectedItem: Encounter;

  sortOptions: SelectItem[];

  sortKey: string;

  displayDialog: boolean;

  sortField: string;

  sortOrder: number;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.encounters = this.userService.getRandomEncounter();

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Category', value: 'category'}
    ];
  }

  selectItem(event: Event, item: Encounter) {
    this.selectedItem = item;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedItem = null;
  }

  goBack() {
    window.history.back();
  }


}
