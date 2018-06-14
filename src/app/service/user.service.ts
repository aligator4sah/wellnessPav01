import { Injectable } from '@angular/core';
import {Client} from '../model/users';

@Injectable()
export class UserService {

  constructor() { }

  // TODO: change mock data to data from server
  getClientTable() {
    let clients = [];
    for (let i = 0; i < 50; i++) {
      clients.push(createNewClient(i));
    }
    return clients;
  }
}

function createNewClient(id: number) {
  return {
    id: id.toString(),
    username: UNAMES[Math.round(Math.random() * (UNAMES.length - 1))],
    firstname: FNAMES[Math.round(Math.random() * (FNAMES.length - 1))],
    lastname: LNAMES[Math.round(Math.random() * (LNAMES.length - 1))],
    dob: DOB[Math.round(Math.random() * (DOB.length - 1))],
    gender: GENDER[Math.round(Math.random() * (GENDER.length - 1))],
    lastEncounter: LASTDATE[Math.round(Math.random() * (LASTDATE.length - 1))],
  };
}

/** Mock data used for front end displaying **/
export const FNAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
export const LNAMES = ['Hunter', 'Smith', 'Allison', 'Rains'];
export const UNAMES = ['dsd123', 'dfw233', 'npr234', 'rop193'];
export const DOB = ['12/23/1993', '04/22/1994', '07/12/1983', '02/23/1974'];
export const GENDER = ['Female', 'Male'];
export const LASTDATE= ['12/23/2017', '04/22/2018', '07/12/2017', '02/23/2018e'];
