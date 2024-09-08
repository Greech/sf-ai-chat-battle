import { inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export const loadlCustomSvgIconsToIconsRegistry = () => {
    const customIconRegistry: { name: string, url: string }[] = [
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
        },
        {
          name: 'ai-battle',
          url: 'assets/icons/ai_battle_logo.svg'
        }
      ];

      const iconRegistry: MatIconRegistry = inject(MatIconRegistry);
      const sanitizer: DomSanitizer = inject(DomSanitizer);

      customIconRegistry.forEach(customIconRegistryEntry => {
        iconRegistry.addSvgIcon(
          `${customIconRegistryEntry.name}-icon`,
          sanitizer.bypassSecurityTrustResourceUrl(customIconRegistryEntry.url)
        );
      });
}