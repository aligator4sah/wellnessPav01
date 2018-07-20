import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soap-list',
  templateUrl: './soap-list.component.html',
  styleUrls: ['./soap-list.component.css']
})
export class SoapListComponent implements OnInit {
  data: any[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        id: 1,
        subjective: 'berifbeirg firegonee nheriogh heirgh ihgi0r ihgo jfiwheg0w iqherig',
        objective: 'beriug ufbguw buer fbiwehqw regierwojg bweur9ghier hfreiwhg',
        assessment: 'bfuewirb erugbur eurbg wefberi eurigh hiewhrg oeorg reigero fenriof',
        plan: 'ebriuf bfuiwhe hfiroef uergh hfiworef biegb ebgiher bgierg',
        date: '08/11/2017'
      },
      {
        id: 2,
        subjective: 'berifbeirg firegonee nheriogh heirgh ihgi0r ihgo jfiwheg0w iqherig',
        objective: 'beriug ufbguw buer fbiwehqw regierwojg bweur9ghier hfreiwhg',
        assessment: 'bfuewirb erugbur eurbg wefberi eurigh hiewhrg oeorg reigero fenriof',
        plan: 'ebriuf bfuiwhe hfiroef uergh hfiworef biegb ebgiher bgierg',
        date: '10/21/2017'
      }
    ];
  }

  goBack() {
    window.history.back();
  }

}
