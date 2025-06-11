import { Component, Input } from '@angular/core';
import { IVideoViewModel } from '../../models/interface/feature/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedStandaloneImports } from '../../shared/shared-imports';

@Component({
  selector: 'guangxun-video',
  imports: [SharedStandaloneImports],
  standalone: true,
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  @Input() video!: IVideoViewModel;
  @Input() videoClassMap: {
    videoTitle?: string | string[] | Set<string> | { [klass: string]: any };
    videoFrame?: string | string[] | Set<string> | { [klass: string]: any };
  } = {};
  sanitizedUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.video) {
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.streamUrl);
    }
  }
}
