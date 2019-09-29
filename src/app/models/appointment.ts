import {Person} from './person';

export class Appointment {
  id: number;
  appointmentDate: Date;
  appointmentType;
  informations: string;
  report: string;
  status: boolean;
  persons: Person[];
  organizer: Person;
}
