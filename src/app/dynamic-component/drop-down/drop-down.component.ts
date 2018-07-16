import {Component, Input, OnInit} from '@angular/core';
import {InputAttributes} from '../../model/encounter';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() attrContent: InputAttributes;

  constructor() { }

  ngOnInit() {
  }

}
