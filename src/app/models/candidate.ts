import {Address} from './address';
import {Degree} from './degree';
import {Feedback} from './feedback';
import {Matter} from './matter';
import {Session} from './session';

// Candidate model
export class Candidate {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  cellPhone: string;
  homePhone: string;
  rankingCandidate;
  address?: Address;
  commentary?: string;
  degrees?: Degree[];
  feedback?: Feedback;
  matters?: Matter[];
  sessions?: Session[];
  sexCandidate: string;
  statusCandidate: string;
}
