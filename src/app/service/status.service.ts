import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StatusService {

  demoaction$:BehaviorSubject<string> = new BehaviorSubject<string>("create");
  existMember$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

}
