import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { MatGridListModule } from '@angular/material/grid-list';
import { Video } from '../../models/interface/feature/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoComponent } from './video/video.component';
import { MockHomePageService } from '../../mocks/services/mock-home-page.service';
import { AppConfigService } from '../../app-config.service';

@Component({
  selector: 'guangxun-home-page-video',
  imports: [SharedStandaloneImports, VideoComponent, MatGridListModule],
  standalone: true,
  templateUrl: './home-page-video.component.html',
  styleUrl: './home-page-video.component.scss',
})
export class HomePageVideoComponent implements OnInit {
  videos: Video[] = [];
  sanitizedUrls: SafeResourceUrl[] = [];

  private _appConfig = inject(AppConfigService);
  private _mockHomePageService = inject(MockHomePageService);

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // this.sanitizedUrls = this.videos.map((v) =>
    //   this.sanitizer.bypassSecurityTrustResourceUrl(v.streamUrl),
    // );

    if (this._appConfig.isMockMode) {
      this._mockHomePageService.getMockVideos();
      this._mockHomePageService.mockVideos$.subscribe((videos) => {
        this.videos = videos;
        this.sanitizedUrls = this.videos.map((v) =>
          this.sanitizer.bypassSecurityTrustResourceUrl(v.streamUrl),
        );
      });
    } else {
      // TODO: When isMockMode is false, use the <video> element instead of <iframe>,
//       and build a Video component with a custom control panel (e.g., play, pause, fullscreen)
    }
  }
  toggleVideo(index: number) {}
}
