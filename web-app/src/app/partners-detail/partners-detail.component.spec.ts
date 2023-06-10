import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersDetailComponent } from './partners-detail.component';

describe('PartnersDetailComponent', () => {
  let component: PartnersDetailComponent;
  let fixture: ComponentFixture<PartnersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
