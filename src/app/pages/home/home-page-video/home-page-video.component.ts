import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { MatGridListModule } from '@angular/material/grid-list';
import { IVideoViewModel } from '../../../models/interface/feature/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoComponent } from '../../../feature/video/video.component';
import { HomePage } from '../../../utils/factory/mock-or-real/abstract/home-page';

class SanitizedVideoViewModel {}

@Component({
  selector: 'guangxun-home-page-video',
  standalone: true,
  imports: [SharedStandaloneImports, VideoComponent, MatGridListModule],
  templateUrl: './home-page-video.component.html',
  styleUrl: './home-page-video.component.scss',
})
export class HomePageVideoComponent implements OnInit {
  videos: IVideoViewModel[] = [];
  sanitizedUrls: SafeResourceUrl[] = [];
  private readonly _homePage = inject(HomePage);
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // this.sanitizedUrls = this.videos.map((v) =>
    //   this.sanitizer.bypassSecurityTrustResourceUrl(v.streamUrl),
    // );
    this._homePage.getVideo().subscribe((viedos) => {
      this.videos = viedos.map((item) => ({
        ...item,
      }));
    });
  }
  toggleVideo(index: number) {}
}
