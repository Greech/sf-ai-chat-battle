import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sf-ai-custom-icon-register',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  template: '',
})
export class CustomIconRegisterComponent {
  private customIconRegistry = [
    {
      name: 'chat-gpt',
      url: 'assets/icons/chat_gpt_logo.svg'
    },
    {
      name: 'claude',
      url: 'assets/icons/claude_ai_logo.svg'
    },
    {
      name: 'gemini',
      url: 'assets/icons/google_gemini_logo.svg'
    }
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.customIconRegistry.forEach(customIconRegistryEntry => {
      iconRegistry.addSvgIcon(
        `${customIconRegistryEntry.name}-icon`,
        sanitizer.bypassSecurityTrustResourceUrl(customIconRegistryEntry.url)
      );
    });
  }
}
