import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWigdetComponent } from './login-wigdet.component';

describe('LoginWigdetComponent', () => {
  let component: LoginWigdetComponent;
  let fixture: ComponentFixture<LoginWigdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWigdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWigdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
