import {Appointment} from './appointment';

export class Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  cellPhone: string;
  homePhone: string;
  commentary?: string;
  mainContact: boolean;
  appointments?: Appointment[];
  type: string;
}
