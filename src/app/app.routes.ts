import { Routes } from '@angular/router';
import { AiBattleOverviewComponent } from './ai-battle-overview/ai-battle-overview.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { CompatitorsDescriptionComponent } from './compatitors-description/compatitors-description.component';
import { ScoreComponent } from './score/score.component';
import { ScoreCriteriasComponent } from './score-criterias/score-criterias.component';
import { AiBattleOverviewSingleChatComponent } from './ai-battle-overview-single-chat/ai-battle-overview-single-chat.component';

export const routes: Routes = [
    { path: 'overview', component: AiBattleOverviewComponent },
    { path: 'overview-single', component: AiBattleOverviewSingleChatComponent },
    { path: 'task', component: TaskDescriptionComponent },
    { path: 'compatitors', component: CompatitorsDescriptionComponent},
    { path: 'score' , component: ScoreComponent },
    { path: 'score-criterias' , component: ScoreCriteriasComponent },
    { path: '', redirectTo: '/overview', pathMatch: 'full' }    
];