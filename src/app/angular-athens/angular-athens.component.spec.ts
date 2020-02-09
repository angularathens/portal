import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAthensComponent } from './angular-athens.component';

describe('AngularAthensComponent', () => {
  let component: AngularAthensComponent;
  let fixture: ComponentFixture<AngularAthensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAthensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAthensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
