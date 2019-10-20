import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotefooterComponent } from './notefooter.component';

describe('NotefooterComponent', () => {
  let component: NotefooterComponent;
  let fixture: ComponentFixture<NotefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
