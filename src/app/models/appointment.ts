import { Address } from './address';
import { Person} from './person';

export class Appointment {
  id: number;
  appointmentType: string;
  appointmentDate: string;
  persons: Person[];
  organizer: Person;
}
