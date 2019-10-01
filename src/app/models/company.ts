import { Person } from './person';
import { Address } from './address';

export class Company {
  id: number;
  name: string;
  antennaName: string;
  siret: string;
  apeCode: string;
  contacts: Person[];
  address?: Address;
}
