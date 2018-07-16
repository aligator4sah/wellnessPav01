import {Component, Input, OnInit} from '@angular/core';
import {InputAttributes} from '../../model/encounter';

@Component({
  selector: 'app-radio-control-box',
  templateUrl: './radio-control-box.component.html',
  styleUrls: ['./radio-control-box.component.css']
})
export class RadioControlBoxComponent implements OnInit {

  @Input() attrContent: InputAttributes;

  constructor() { }

  ngOnInit() {
  }

}
