import {Appointment} from './appointment';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  cellPhone: string;
  homePhone: string;
  username: string;
  commentary?: string;
  appointments?: Appointment[];
  login: string;
  password: string;
  role: string;
  token: string;
}
