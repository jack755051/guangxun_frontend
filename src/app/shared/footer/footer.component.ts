import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterIcons } from '../fa-icon';
import { FaIconWithRoute } from '../../models/interface/fa-icon-with-route.interface';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'guangxun-footer',
  imports: [MatDividerModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  constructor(private _translate: TranslateService) {}

  ngOnInit(): void {}

  buildFooterIcons(): FaIconWithRoute[] {
    return [
      { icon: FooterIcons.faThreads, route: '' },
      { icon: FooterIcons.faFacebook, route: '' },
      { icon: FooterIcons.faYoutube, route: '' },
      { icon: FooterIcons.faLinkedin, route: '' },
      { icon: FooterIcons.faLine, route: '' },
    ];
  }
}
