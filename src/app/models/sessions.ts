import {Company} from './company';
import {Session} from './session';

export class Sessions {
  id: number;
  company: Company;
  session: Session;
  validated: boolean;
}
