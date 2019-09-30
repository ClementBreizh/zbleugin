import {Address} from './address';
import {Degree} from './degree';
import {Feedback} from './feedback';
import {Appointment} from './appointment';
import {Assessment} from './assessment';
import {AcquiredMatter} from './acquiredMatter';


// Candidate model
export class Candidate {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  cellPhone: string;
  homePhone: string;
  ranking: string;
  address?: Address;
  commentary?: string;
  degrees?: Degree[];
  feedback?: Feedback;
  matters?: AcquiredMatter[];
  companySession?: any;
  sexCandidate: string;
  statusCandidate: string;
  appointments?: Appointment[];
  assessments?: Assessment[];
}
