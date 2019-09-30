import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {MatIconRegistry, PageEvent, Sort} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';
import {UserApiService} from '../../services/user-api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'login', 'role', 'email', 'cellPhone', 'actions'];

  dataSource: User[];

  resultNb: number;

  usersListForm = this.fb.group({
    firstname:  '',
    lastname: '',
    login: '',
    role: '',
    email: '',
    cellPhone: '',
    homePhone: '',
    commentary: '',
    page: 0,
    size: 20,
    sort: ''
  });


  constructor(private api: UserApiService, private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer, private fb: FormBuilder) {
iconRegistry.addSvgIcon(
'search',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
iconRegistry.addSvgIcon(
'show',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/show.svg'));
iconRegistry.addSvgIcon(
'edit',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
iconRegistry.addSvgIcon(
'delete',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
iconRegistry.addSvgIcon(
'add',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
}

ngOnInit() {
this.refresh();
}

onDelete(user: User): void {
if (confirm('Êtes-vous sûr de vouloir supprimer ' + user.firstname + ' ' + user.lastname + '?')) {
this.api
.deleteOne(user.id)
.subscribe(_ => this.refresh()); // TODO: Use notification to show success OR failure.
}
}

private refresh() {
this.api
.getAll(this.params())
.subscribe(data => {
this.dataSource = data.content;
this.resultNb = data.totalElements;
console.log(this.dataSource);
});
}

onSubmit($event) {
$event.preventDefault();

this.usersListForm.patchValue({
page: 0
});

return this.refresh();
}

onReset($event) {
$event.preventDefault();

this.usersListForm.patchValue({
firstname:  '',
lastname: '',
login: '',
role: '',
email: '',
cellPhone: '',
page: 0
}
);

this.refresh();
}

pageEvent($event: PageEvent) {
this.usersListForm.patchValue({
page: $event.pageIndex,
size: $event.pageSize
});

this.refresh();
}

params() {
return Object.keys(this.usersListForm.controls)
.filter(k => this.usersListForm.value[k] !== '')
.reduce((acc, k) => ({...acc, [k]: this.usersListForm.value[k]}), {});
}

sortData($event: Sort) {
if ($event.direction === '') {
this.usersListForm.patchValue({
sort: ''
});
} else {
this.usersListForm.patchValue({
sort: $event.active + ',' + $event.direction
});
}

this.refresh();
}

}
