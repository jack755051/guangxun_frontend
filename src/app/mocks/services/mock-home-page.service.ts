import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../../models/interface/feature/video.interface';

@Injectable({
  providedIn: 'root',
})
export class MockHomePageService {
  mockVideos = new BehaviorSubject<Video[]>([]);
  mockVideos$ = this.mockVideos.asObservable();

  constructor() {}

  getMockVideos() {
    this.mockVideos.next([
      {
        id: 1,
        title: 'Video 1',
        description: 'Video 1 description',
        streamUrl: 'https://www.youtube.com/embed/VRgR94AjLQE',
      },
      {
        id: 2,
        title: 'Video 2',
        description: 'Video 2 description',
        streamUrl: 'https://www.youtube.com/embed/VRgR94AjLQE',
      },
      {
        id: 3,
        title: 'Video 3',
        description: 'Video 3 description',
        streamUrl: 'https://www.youtube.com/embed/VRgR94AjLQE',
      },
      {
        id: 4,
        title: 'Video 4',
        description: 'Video 4 description',
        streamUrl: 'https://www.youtube.com/embed/VRgR94AjLQE',
      },
    ]);
  }
}
