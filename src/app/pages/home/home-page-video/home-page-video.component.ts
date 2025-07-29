import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { MatGridListModule } from '@angular/material/grid-list';
import { IVideoViewModel } from '../../../models/interface/feature/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoComponent } from '../../../feature/video/video.component';
import { MockHomePageService } from '../../../mocks/services/mock-home-page.service';

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
  _mock = inject(MockHomePageService);

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this._mock.getVideo().subscribe((viedos) => {
      this.videos = viedos.map((item) => ({
        ...item,
      }));
    });
  }
  toggleVideo(index: number) {}
}
