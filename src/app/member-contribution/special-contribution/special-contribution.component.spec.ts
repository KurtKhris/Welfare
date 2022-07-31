import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialContributionComponent } from './special-contribution.component';

describe('SpecialContributionComponent', () => {
  let component: SpecialContributionComponent;
  let fixture: ComponentFixture<SpecialContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
