import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivefooterComponent } from './archivefooter.component';

describe('ArchivefooterComponent', () => {
  let component: ArchivefooterComponent;
  let fixture: ComponentFixture<ArchivefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
