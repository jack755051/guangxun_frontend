import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterIcons } from '../fa-icon';
import { MatDividerModule } from '@angular/material/divider';
import { FaIconWithLink, PolicyWithLink } from '../../models/interface/page/footer.interface';
import { SharedStandaloneImports } from '../shared-imports';

@Component({
  selector: 'guangxun-footer',
  standalone: true,
  imports: [SharedStandaloneImports, MatDividerModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  constructor(private _translate: TranslateService) {}

  ngOnInit(): void {}

  footerIcons(): FaIconWithLink[] {
    return [
      { icon: FooterIcons.faFacebook, link: '' },
      { icon: FooterIcons.faThreads, link: '' },
      { icon: FooterIcons.faYoutube, link: '' },
      { icon: FooterIcons.faLinkedin, link: '' },
      { icon: FooterIcons.faLine, link: '' },
    ];
  }

  privacyPolicy(): PolicyWithLink[] {
    return [
      { policy: 'POLICY.LEGAL_AND_TRADEMARK', link: '' },
      { policy: 'POLICY.PRIVACY_POLICY', link: '' },
      { policy: 'POLICY.COOKIE_POLICY', link: '' },
      { policy: 'POLICY.SITE_MAP', link: '' },
    ];
  }
}
