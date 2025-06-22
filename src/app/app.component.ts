import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { I18nService } from './core/services/i18n.service';
import { AutoPaddingDirective } from './core/directives';
// import { GuangxunBreadcrumbComponent } from 'guangxun-breadcrumb';
import { GuangxunBreadcrumbComponent } from '@sanring/guangxun-breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    AutoPaddingDirective,
    GuangxunBreadcrumbComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'base_template';
  private i18n = inject(I18nService);

  constructor() {}

  ngOnInit(): void {}
}
