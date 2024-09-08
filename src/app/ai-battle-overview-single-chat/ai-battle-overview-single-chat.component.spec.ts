import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBattleOverviewSingleChatComponent } from './ai-battle-overview-single-chat.component';

describe('AiBattleOverviewSingleChatComponent', () => {
  let component: AiBattleOverviewSingleChatComponent;
  let fixture: ComponentFixture<AiBattleOverviewSingleChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiBattleOverviewSingleChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBattleOverviewSingleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
