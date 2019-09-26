import {Address} from './address';
import {Degree} from './degree';
import {Feedback} from './feedback';
import {Matter} from './matter';
import {Appointment} from './appointment';

// Candidate model
export class Candidate {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  cellPhone: string;
  homePhone: string;
  rankingCandidate;
  address_id?: Address;
  commentary?: string;
  degrees?: Degree[];
  feedback_id?: Feedback;
  matters?: Matter[];
  sessions?: any;
  sexCandidate: string;
  statusCandidate: string;
}
