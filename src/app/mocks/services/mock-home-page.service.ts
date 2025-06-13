import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IVideoViewModel } from '../../models/interface/feature/video.interface';
import { ArrangeType, CardItem, Cards } from '../../components/card';
import { TechnicalSupportFile } from '../../models/interface/feature/technical-support.interface';
import {
  ExpansionContentType,
  ExpansionPanelItem,
  ExpansionPanelType,
} from '../../feature/expansion-panel';
import { HomePage } from '../../utils/factory/mock-or-real/abstract/home-page';
import { HomePageNewsIcons } from '../../shared/fa-icon';

@Injectable({
  providedIn: 'root',
})
export class MockHomePageService implements HomePage {
  constructor() {}
  /**
   * 取得 mock 影片
   */
  getVideo(): Observable<IVideoViewModel[]> {
    return of([
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
  getNews(): Observable<ExpansionPanelItem[]> {
    return of([
      {
        header: { title: 'News 1', description: 'News 1 description' },
        content: {
          id: '1',
          type: ExpansionContentType.TEXT,
          date: '20250501',
          text: 'News 1 content',
        },
        routerLink: '/news/1',
        type: ExpansionPanelType.FIRE,
      },
      {
        header: { title: 'News 2', description: 'News 2 description' },
        content: {
          id: '2',
          type: ExpansionContentType.TEXT,
          date: '20250501',
          text: 'News 2 content',
        },
        routerLink: '/news/2',
        type: ExpansionPanelType.LIVE,
      },
      {
        header: { title: 'News 3', description: 'News 3 description' },
        content: {
          id: '3',
          type: ExpansionContentType.TEXT,
          date: '20250501',
          text: 'News 3 content',
        },
        routerLink: '/news/3',
        type: ExpansionPanelType.TECHNICAL_SUPPORT,
      },
      {
        header: { title: 'News 4', description: 'News 4 description' },
        content: {
          id: '4',
          type: ExpansionContentType.TEXT,
          date: '20250501',
          text: 'News 4 content',
        },
        routerLink: '/news/3',
        type: ExpansionPanelType.TECHNICAL_SUPPORT,
      },
    ]);
  }
  /** 取得mock產品卡片**/
  getProducts(): Observable<Cards<CardItem>> {
    return of({
      card: [
        {
          header: {
            avatar: {
              icon: HomePageNewsIcons.faFire,
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
              icon: HomePageNewsIcons.faFire,
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
              icon: HomePageNewsIcons.faFire,
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
              icon: HomePageNewsIcons.faFire,
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
  /**取得mock產品技術支援**/
  getTechnicalSupports(): Observable<TechnicalSupportFile[]> {
    return of([
      {
        id: 'file-1',
        fileType: 'fileDownload',
        fileName: 'File Download 1',
        fileSize: 101,
        updatedAt: new Date('2025-04-27T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-1',
      },
      {
        id: 'file-2',
        fileType: 'fileDownload',
        fileName: 'File Download 2',
        fileSize: 102,
        updatedAt: new Date('2025-04-26T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-2',
      },
      {
        id: 'file-3',
        fileType: 'fileDownload',
        fileName: 'File Download 3',
        fileSize: 103,
        updatedAt: new Date('2025-04-25T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-3',
      },
      {
        id: 'file-4',
        fileType: 'fileDownload',
        fileName: 'File Download 4',
        fileSize: 104,
        updatedAt: new Date('2025-04-24T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-4',
      },
      {
        id: 'file-5',
        fileType: 'fileDownload',
        fileName: 'File Download 5',
        fileSize: 105,
        updatedAt: new Date('2025-04-23T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-5',
      },
      {
        id: 'file-6',
        fileType: 'fileDownload',
        fileName: 'File Download 6',
        fileSize: 106,
        updatedAt: new Date('2025-04-22T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-6',
      },
      {
        id: 'file-7',
        fileType: 'fileDownload',
        fileName: 'File Download 7',
        fileSize: 107,
        updatedAt: new Date('2025-04-21T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-7',
      },
      {
        id: 'file-8',
        fileType: 'fileDownload',
        fileName: 'File Download 8',
        fileSize: 108,
        updatedAt: new Date('2025-04-20T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-8',
      },
      {
        id: 'file-9',
        fileType: 'fileDownload',
        fileName: 'File Download 9',
        fileSize: 109,
        updatedAt: new Date('2025-04-19T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-9',
      },
      {
        id: 'file-10',
        fileType: 'fileDownload',
        fileName: 'File Download 10',
        fileSize: 110,
        updatedAt: new Date('2025-04-18T02:04:10.832Z'),
        fileUrl: 'https://example.com/file-download-10',
      },

      {
        id: 'doc-1',
        fileType: 'document',
        fileName: 'Document 1',
        fileSize: 201,
        updatedAt: new Date('2025-04-17T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-1',
      },
      {
        id: 'doc-2',
        fileType: 'document',
        fileName: 'Document 2',
        fileSize: 202,
        updatedAt: new Date('2025-04-16T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-2',
      },
      {
        id: 'doc-3',
        fileType: 'document',
        fileName: 'Document 3',
        fileSize: 203,
        updatedAt: new Date('2025-04-15T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-3',
      },
      {
        id: 'doc-4',
        fileType: 'document',
        fileName: 'Document 4',
        fileSize: 204,
        updatedAt: new Date('2025-04-14T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-4',
      },
      {
        id: 'doc-5',
        fileType: 'document',
        fileName: 'Document 5',
        fileSize: 205,
        updatedAt: new Date('2025-04-13T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-5',
      },
      {
        id: 'doc-6',
        fileType: 'document',
        fileName: 'Document 6',
        fileSize: 206,
        updatedAt: new Date('2025-04-12T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-6',
      },
      {
        id: 'doc-7',
        fileType: 'document',
        fileName: 'Document 7',
        fileSize: 207,
        updatedAt: new Date('2025-04-11T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-7',
      },
      {
        id: 'doc-8',
        fileType: 'document',
        fileName: 'Document 8',
        fileSize: 208,
        updatedAt: new Date('2025-04-10T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-8',
      },
      {
        id: 'doc-9',
        fileType: 'document',
        fileName: 'Document 9',
        fileSize: 209,
        updatedAt: new Date('2025-04-09T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-9',
      },
      {
        id: 'doc-10',
        fileType: 'document',
        fileName: 'Document 10',
        fileSize: 210,
        updatedAt: new Date('2025-04-08T02:04:10.832Z'),
        fileUrl: 'https://example.com/document-10',
      },
    ]);
  }
}
