export class Client {
  username: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  lastEncouter: string;

  constructor(options: {
    username?: string;
    firstname?: string;
    lastname?: string;
    dob?: string;
    gender?: string;
    lastEncounter?: string;
  } = {}) {
    this.username = options.username;
    this.firstname = options.firstname;
    this.lastname = options.lastname;
    this.dob = options.dob;
    this.gender = options.gender;
    this.lastEncouter = options.lastEncounter;
  }
}



