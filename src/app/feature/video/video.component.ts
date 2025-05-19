import { Component, Input } from '@angular/core';
import { Video } from '../../models/interface/feature/video.interface';
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
  @Input() video!: Video;
  sanitizedUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.video) {
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.streamUrl);
    }
  }
}
