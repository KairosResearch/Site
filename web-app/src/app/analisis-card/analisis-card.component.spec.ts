import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisCardComponent } from './analisis-card.component';

describe('AnalisisCardComponent', () => {
  let component: AnalisisCardComponent;
  let fixture: ComponentFixture<AnalisisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
