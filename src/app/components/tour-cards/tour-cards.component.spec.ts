import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardsComponent } from './tour-cards.component';

describe('TourCardsComponent', () => {
  let component: TourCardsComponent;
  let fixture: ComponentFixture<TourCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourCardsComponent]
    });
    fixture = TestBed.createComponent(TourCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
