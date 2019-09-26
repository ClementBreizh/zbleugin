import {Person} from './person';

export class Appointment {
  appointmentDate: Date;
  appointmentType;
  informations: string;
  report: string;
  status: boolean;
  persons: Person;
  organizer: Person;
}
