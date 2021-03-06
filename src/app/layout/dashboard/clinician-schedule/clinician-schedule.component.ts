import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-clinician-schedule',
  templateUrl: './clinician-schedule.component.html',
  styleUrls: ['./clinician-schedule.component.css']
})
export class ClinicianScheduleComponent implements OnInit {
  events: any[];
  header: any;
  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {

    this.events = [
      {
        "title": "All Day Event",
        "start": "2018-07-10"
      },
      {
        "title": "Long Event",
        "start": "2018-07-02",
        "end": "2018-07-05"
      },
      {
        "title": "Repeating Event",
        "start": "2018-07-22T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2018-07-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2018-07-11",
        "end": "2018-07-13"
      }
    ];
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }


  handleEvent(e) {
    this.showInfo();
  }


  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  goBack() {
    window.history.back();
  }

}
