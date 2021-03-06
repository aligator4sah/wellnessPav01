import {Component, Input, OnInit} from '@angular/core';
import {InputAttributes} from '../../model/encounter';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @Input() attrContent: InputAttributes;

  constructor() { }

  ngOnInit() {
  }

}
