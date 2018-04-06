import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'New', icon: 'fa-plus'},
      {label: 'Open', icon: 'fa-download'},
      {label: 'Undo', icon: 'fa-refresh'}
    ];
  }

}
