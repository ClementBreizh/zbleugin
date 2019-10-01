import {Person} from './person';

export class Appointment {
  id: number;
  appointmentDate: Date;
  appointmentType: string;
  informations: string;
  report: string;
  status: boolean;
  persons?: Person[];
  organizer: Person;
}
