import {Appointment} from './appointment';

export class Person {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  mainContact: boolean;
  appointments?: Appointment[];
}
