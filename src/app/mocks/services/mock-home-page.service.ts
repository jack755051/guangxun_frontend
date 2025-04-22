import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../../models/interface/feature/video.interface';
import {
  ExpansionPanelItem,
  ExpansionPanelType,
} from '../../models/interface/feature/expansion-panel.interface';
import { ArrangeType, Cards } from '../../components/card';

@Injectable({
  providedIn: 'root',
})
export class MockHomePageService {
  private _mockVideos = new BehaviorSubject<Video[]>([]);
  mockVideos$ = this._mockVideos.asObservable();

  private _mockNews = new BehaviorSubject<ExpansionPanelItem[]>([]);
  mockNews$ = this._mockNews.asObservable();

  private _mockProducts = new BehaviorSubject<Cards>({
    card: [],
    arrangeType: ArrangeType.LIST,
  });
  mockProducts$ = this._mockProducts.asObservable();

  constructor() {}

  /**
   * 取得 mock 影片
   */
  getMockVideos() {
    this._mockVideos.next([
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

  /**
   * 取得 mock 新聞
   */
  getMockNews() {
    this._mockNews.next([
      {
        header: { title: 'News 1', description: 'News 1 description' },
        content: {
          id: '1',
          date: '20250501',
          author: 'News 1 author',
          content: 'News 1 content',
        },
        routerLink: '/news/1',
        type: ExpansionPanelType.FIRE,
      },
      {
        header: { title: 'News 2', description: 'News 2 description' },
        content: {
          id: '2',
          date: '20250501',
          author: 'News 2 author',
          content: 'News 2 content',
        },
        routerLink: '/news/2',
        type: ExpansionPanelType.LIVE,
      },
      {
        header: { title: 'News 3', description: 'News 3 description' },
        content: {
          id: '3',
          date: '20250501',
          author: 'News 3 author',
          content: 'News 3 content',
        },
        routerLink: '/news/3',
        type: ExpansionPanelType.TECHNICAL_SUPPORT,
      },
    ]);
  }

  getMockProducts() {
    this._mockProducts.next({
      card: [
        {
          header: {
            avatar: {
              icon: 'faFire',
              color: 'red',
            },
            title: 'Product 1',
          },
          content: {
            image: 'assets/images/mock/mock_product.jpeg',
            title: 'Title 1',
            subTitle: 'Subtitle 1',
            description: 'Description 1',
            tag: [
              {
                label: 'tag1-1',
                action: () => {},
              },
              {
                label: 'tag1-2',
                action: () => {},
              },
              {
                label: 'tag1-3',
                action: () => {},
              },
            ],
          },
          footer: {
            button: [
              {
                label: 'Button 1-1',
                action: () => {},
              },
              {
                label: 'Button 1-2',
                action: () => {},
              },
            ],
          },
        },
        {
          header: {
            avatar: {
              icon: 'faFire',
              color: 'red',
            },
            title: 'Product 2',
          },
          content: {
            image: 'assets/images/mock/mock_product.jpeg',
            title: 'Title 2',
            subTitle: 'Subtitle 2',
            description: 'Description 2',
            tag: [
              { label: 'tag2-1', action: () => {} },
              { label: 'tag2-2', action: () => {} },
              { label: 'tag2-3', action: () => {} },
            ],
          },
          footer: {
            button: [
              {
                label: 'Button 2',
                action: () => {},
              },
            ],
          },
        },
        {
          header: {
            avatar: {
              icon: 'faFire',
              color: 'red',
            },
            title: 'Product 3',
          },
          content: {
            image: 'assets/images/mock/mock_product.jpeg',
            title: 'Title 3',
            subTitle: 'Subtitle 3',
            description: 'Description 3',
            tag: [
              { label: 'tag3-1', action: () => {} },
              { label: 'tag3-2', action: () => {} },
              { label: 'tag3-3', action: () => {} },
            ],
          },
          footer: {
            button: [
              {
                label: 'Button 3',
                action: () => {},
              },
            ],
          },
        },
        {
          header: {
            avatar: {
              icon: 'faFire',
              color: 'red',
            },
            title: 'Product 4',
          },
          content: {
            image: 'assets/images/mock/mock_product.jpeg',
            title: 'Title 4',
            subTitle: 'Subtitle 4',
            description: 'Description 4',
            tag: [
              { label: 'tag4-1', action: () => {} },
              { label: 'tag4-2', action: () => {} },
              { label: 'tag4-3', action: () => {} },
            ],
          },
          footer: {
            button: [
              {
                label: 'Button 4',
                action: () => {},
              },
              {
                label: 'Button 4-2',
                action: () => {},
              },
            ],
          },
        },
      ],
      arrangeType: ArrangeType.LIST,
    });
  }
}
