import {Company} from './company';
import {Session} from './session';

export class CompanySession {
  id: number;
  company: Company;
  session: Session;
  validated: boolean;
}
