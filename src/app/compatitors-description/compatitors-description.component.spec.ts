import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatitorsDescriptionComponent } from './compatitors-description.component';

describe('CompatitorsDescriptionComponent', () => {
  let component: CompatitorsDescriptionComponent;
  let fixture: ComponentFixture<CompatitorsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompatitorsDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompatitorsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
