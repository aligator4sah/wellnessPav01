
export class Encounter {
  id: number;
  username: string;
  height: number;
  weight: number;
  diastolicBloodPressure: number;
  systolicBloodPressure: number;
  heartRate: number;
  respiratoryRate: number;
  temperature: number;
  oxygenSaturation: number;
  waistCircum: number;
  headCircum: number;
  bmi: number;
  category: string;
  disposition: string;
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
  date: string;

  constructor(options: {
    id?: number;
    username?: string;
    height?: number;
    weight?: number;
    diastolicBloodPressure?: number;
    systolicBloodPressure?: number;
    heartRate?: number;
    respiratoryRate?: number;
    temperature?: number;
    oxygenSaturation?: number;
    waistCircum?: number;
    headCircum?: number;
    bmi?: number;
    category?: string;
    disposition?: string;
    subjective?: string;
    objective?: string;
    assessment?: string;
    plan?: string;
    date?: string;
  } = {}) {
    this.id = options.id;
    this.username = options.username;
    this.height = options.height;
    this.weight = options.weight;
    this.systolicBloodPressure = options.systolicBloodPressure || 132;
    this.diastolicBloodPressure = options.diastolicBloodPressure || 88;
    this.heartRate = options.heartRate || 80;
    this.respiratoryRate = options.respiratoryRate || 16;
    this.temperature = options.temperature || 37;
    this.oxygenSaturation = options.oxygenSaturation || 96;
    this.waistCircum = options.waistCircum || 100;
    this.headCircum = options.headCircum || 35;
    this.bmi = options.bmi || 22.6;
    this.category = options.category || '';
    this.disposition = options.category || 'Follow up';
    this.subjective = options.subjective || '';
    this.objective = options.objective || '';
    this.assessment = options.assessment || '';
    this.plan = options.plan || '';
    this.date = options.date || '';
  }
}


export class InputAttributes {
  name: string;
  type: string;
  optionNum: number;
  optionItems: any;
  placeholder: string;
  constructor(options: {
    name?: string;
    type?: string;
    optionNum?: number;
    optionItems?: any;
    placeholder?: string;
  } = {}) {
    this.name = options.name;
    this.type = options.type;
    this.optionNum = options.optionNum || 0;
    this.optionItems = options.optionItems || {};
    this.placeholder = options.placeholder || '';
  }
}
