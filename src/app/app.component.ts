import { Component, ViewChild } from '@angular/core';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { CustomIconRegisterComponent } from './shared/custom-icon-register/custom-icon-register.component';

@Component({
  selector: 'sf-ai-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar, 
    MatButton, 
    MatSidenavModule,
    MatIconButton,
    MatIcon,
    NavComponent,
    MatButtonModule,
    CustomIconRegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleSidenav() {
    this.drawer.toggle();
  }
}
