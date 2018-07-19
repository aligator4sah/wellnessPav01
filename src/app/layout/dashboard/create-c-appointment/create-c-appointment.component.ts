import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-c-appointment',
  templateUrl: './create-c-appointment.component.html',
  styleUrls: ['./create-c-appointment.component.css']
})
export class CreateCAppointmentComponent implements OnInit {

  frequency: any[];
  reminder: any[];
  priority: any[];
  events: any[];
  text1: string = 'Add additional note if needed';

  constructor() { }

  ngOnInit() {
  }

}
