import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabeldialogComponent } from './addlabeldialog.component';

describe('AddlabeldialogComponent', () => {
  let component: AddlabeldialogComponent;
  let fixture: ComponentFixture<AddlabeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
