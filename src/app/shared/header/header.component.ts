import { Component, inject } from '@angular/core';
import { SharedStandaloneImports } from '../shared-imports';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../core/services/i18n.service';
import { ReplaceLabelKey } from '../../models/types/replaceLabelkey.type';
import { FaIconWithLink, LabeledLink } from '../../models/interface/shared/shared.interface';
import { HeaderIcons } from '../fa-icon';


type NavbarLink = ReplaceLabelKey<LabeledLink, 'navbar'>;

@Component({
  selector: 'guangxun-header',
  standalone: true,
  imports: [SharedStandaloneImports, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private i18n = inject(I18nService);

  navbar: NavbarLink[] = [
    {
      navbar: 'NAVBAR.HOME',
      link: '',
    },
    {
      navbar: 'NAVBAR.ABOUT',
      link: '',
    },
    {
      navbar: 'NAVBAR.SERVICE_AND_PRODUCTS',
      link: '',
    },
    {
      navbar: 'NAVBAR.NEWS',
      link: '',
    },
    {
      navbar: 'NAVBAR.TECHNICAL_SUPPORT',
      link: '',
    },
    {
      navbar: 'NAVBAR.CONTACT',
      link: '',
    },
  ];

  constructor() {}

  headerIcons(): FaIconWithLink[] {
    return [
      { icon: HeaderIcons.faUser, link: '' },
      { icon: HeaderIcons.faGlobe, link: '' },
      { icon: HeaderIcons.faMagnifyingGlass, link: '' },
    ];
  }

  onClickNavbar(link: string) {

  }
}
