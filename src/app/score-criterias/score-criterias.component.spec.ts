import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCriteriasComponent } from './score-criterias.component';

describe('ScoreCriteriasComponent', () => {
  let component: ScoreCriteriasComponent;
  let fixture: ComponentFixture<ScoreCriteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreCriteriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreCriteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
