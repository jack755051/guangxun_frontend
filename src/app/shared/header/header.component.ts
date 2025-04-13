import { Component, inject } from '@angular/core';
import { SharedStandaloneImports } from '../shared-imports';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../core/services/i18n.service';
import { ReplaceLabelKey } from '../../models/types/replaceLabelkey.type';
import { FaIconWithLink, LabeledLink } from '../../models/interface/shared/shared.interface';
import { HeaderIcons } from '../fa-icon';
import { Router } from '@angular/router';
import { DialogService, DialogType } from '../../components/dialog';
import { DialogButtonType } from '../../components/dialog/model/enum/dialog-button-dialog.enum';
import { emit } from 'process';

type NavbarLink = ReplaceLabelKey<LabeledLink, 'navbar'>;

@Component({
  selector: 'guangxun-header',
  standalone: true,
  imports: [SharedStandaloneImports, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private i18n = inject(I18nService);
  private router = inject(Router);
  private _dialog = inject(DialogService);

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

  readonly DialogType = DialogType;

  constructor(private _router: Router) {}

  headerIcons(): FaIconWithLink[] {
    return [
      { icon: HeaderIcons.faUser, action: () => this.openRemindDialog() },
      { icon: HeaderIcons.faGlobe, link: '' },
      { icon: HeaderIcons.faMagnifyingGlass, action: () => this.openConfirmDialog() },
    ];
  }

  // ----- dialog start -----

  openRemindDialog() {
    this._dialog.openRemindDialog({
      type: DialogType.REMIND,
      header: {
        title: '提醒',
      },
      content: {
        type: 'text',
        text: '確定要關閉嗎？',
      },
      footer: {
        buttons: [{ type: DialogButtonType.CANCEL, label: '關閉' }],
      },
      width: '500px',
      height: 'auto',
      panelClass: 'dialog-remind-style',
    });
  }

  openConfirmDialog() {
    this._dialog.openConfirmDialog({
      type: DialogType.CONFIRM,
      header: {
        title: '確認',
      },
      content: {
        type: 'text',
        text: '確定要關閉嗎？',
      },
      footer: {
        buttons: [
          { type: DialogButtonType.CANCEL, label: '關閉' },
          {
            type: DialogButtonType.CONFIRM,
            label: '確定',
            action: () => {
              console.log('使用者按下確定-action');
            },
          },
        ],
        onConfirm: () => {
          console.log('使用者按下確定-onConfirm');
        },
      },

      width: '600px',
      height: 'auto',
      panelClass: 'dialog-confirm-style',
    });
  }

  // ----- dialog end -----

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
