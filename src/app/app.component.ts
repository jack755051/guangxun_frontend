import {  Component,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { I18nService } from './core/services/i18n.service';
import { AutoPaddingDirective } from './core/directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, AutoPaddingDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  title = 'base_template';
  private i18n = inject(I18nService);

  constructor() { }

}
