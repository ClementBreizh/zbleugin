import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../../models/person';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: Person, args?: any): any {
    let result = '';

    if (value) {
      result = `<span class="firstname">${value.firstname}</span> <span class="lastname">${value.lastname}</span>`;
    }

    return result;
  }
}
