import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBattleOverviewComponent } from './ai-battle-overview.component';

describe('AiBattleOverviewComponent', () => {
  let component: AiBattleOverviewComponent;
  let fixture: ComponentFixture<AiBattleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiBattleOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBattleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
