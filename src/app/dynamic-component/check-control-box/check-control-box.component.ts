import {Component, Input, OnInit} from '@angular/core';
import {InputAttributes} from '../../model/encounter';

@Component({
  selector: 'app-check-control-box',
  templateUrl: './check-control-box.component.html',
  styleUrls: ['./check-control-box.component.css']
})
export class CheckControlBoxComponent implements OnInit {
  @Input() attrContent: InputAttributes;

  constructor() { }

  ngOnInit() {
  }

}
