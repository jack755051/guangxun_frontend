import { Component, inject } from '@angular/core';
import { SharedStandaloneImports } from '../shared-imports';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../core/services/i18n.service';
import { ReplaceLabelKey } from '../../models/types/replaceLabelkey.type';
import { FaIconWithLink, LabeledLink } from '../../models/interface/shared/shared.interface';
import { HeaderIcons } from '../fa-icon';
import { Router } from '@angular/router';


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
  private router = inject(Router);

  navbar: NavbarLink[] = [
    {
      navbar: 'NAVBAR.HOME',
      link: '/home',
    },
    {
      navbar: 'NAVBAR.ABOUT',
      link: '/about',
    },
    {
      navbar: 'NAVBAR.SERVICE_AND_PRODUCTS',
      link: '/service-and-products',
    },
    {
      navbar: 'NAVBAR.NEWS',
      link: '/news',
    },
    {
      navbar: 'NAVBAR.TECHNICAL_SUPPORT',
      link: '/technical-support',
    },
    {
      navbar: 'NAVBAR.CONTACT',
      link: '/contact',
    },
  ];

  constructor(private _router: Router) {}

  headerIcons(): FaIconWithLink[] {
    return [
      { icon: HeaderIcons.faUser, link: '' },
      { icon: HeaderIcons.faGlobe, link: '' },
      { icon: HeaderIcons.faMagnifyingGlass, link: '' },
    ];
  }

  onClickLogo() {
    this._router.navigate(['/home']);
  }
  /**
   * 點擊navbar
   * @param link 連結
   */
  onClickNavbar(link: string) {
    this._router.navigate([link]);
  }

    isActive(link: string): boolean {
    return this.router.url === link;
  }
}
