import { Injectable } from '@angular/core';
import {Client} from '../model/users';
import {CATEGORY} from '../model/mock';
import {Encounter} from '../model/encounter';

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

  getEncounterTable() {
    let encounters = [];
    for (let i = 0; i < 20; i++) {
      encounters.push(createNewEncounters(i));
    }
    return encounters;
  }

  getRandomEncounter() {
    let encounters = [];
    for (let i = 0; i < 10; i++) {
      encounters.push(createRandomEncounters(i));
    }
    return encounters;
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

function createNewEncounters(id: number) {
  return {
    id: id.toString(),
    date: LASTDATE[Math.round(Math.random() * (LASTDATE.length - 1))],
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))].label,
    provider: UNAMES[Math.round(Math.random() * (UNAMES.length - 1))],
  }
}

function createRandomEncounters(id: number) {
  const encounter = new Encounter({
    id: id,
    username: UNAMES[Math.round(Math.random() * (UNAMES.length - 1))],
    height: HEIGHT[Math.round(Math.random() * (HEIGHT.length - 1))],
    weight: WEIGHT[Math.round(Math.random() * (WEIGHT.length - 1))],
    date: LASTDATE[Math.round(Math.random() * (LASTDATE.length - 1))],
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))].label,
  });
  return encounter;
}

/** Mock data used for front end displaying **/
export const FNAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
export const LNAMES = ['Hunter', 'Smith', 'Allison', 'Rains'];
export const UNAMES = ['dsd123', 'dfw233', 'npr234', 'rop193'];
export const DOB = ['12/23/1993', '04/22/1994', '07/12/1983', '02/23/1974'];
export const GENDER = ['Female', 'Male'];
export const LASTDATE= ['12/23/2017', '04/22/2018', '07/12/2017', '02/23/2018'];
export const HEIGHT = [167, 152, 176, 158, 84, 193];
export const WEIGHT = [120, 150, 200, 100, 163 ];
