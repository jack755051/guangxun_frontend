import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../../models/interface/feature/video.interface';
import { ExpansionPanelItem } from '../../models/interface/feature/expansion-panel.interface';

@Injectable({
  providedIn: 'root',
})
export class MockHomePageService {
  mockVideos = new BehaviorSubject<Video[]>([]);
  mockVideos$ = this.mockVideos.asObservable();

  mockNews = new BehaviorSubject<ExpansionPanelItem[]>([]);
  mockNews$ = this.mockNews.asObservable();

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

  getMockNews() {
    this.mockNews.next([
      {
        id: '1',
        header: { title: 'News 1', description: 'News 1 description' },
        content: 'News 1 content',
        routerLink: '/news/1',
      },
      {
        id: '2',
        header: { title: 'News 2', description: 'News 2 description' },
        content: 'News 2 content',
        routerLink: '/news/2',
      },
      {
        id: '3',
        header: { title: 'News 3', description: 'News 3 description' },
        content: 'News 3 content',
        routerLink: '/news/3',
      },
    ]);
  }
}
