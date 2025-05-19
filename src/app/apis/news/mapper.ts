import { newsResDto } from './res.dto';
import { INewsTypeContentViewModel } from '../../models/interface/feature/expansion-panel.interface';

export class NewsMapper {
  public static NewsToViewModel(data: any): INewsTypeContentViewModel[] {
    return Array.isArray(data) ? data.map((item) => this.mapNewsToViewModel(item)) : [];
  }

  private static mapNewsToViewModel(news: any): INewsTypeContentViewModel {
    return {
      header: {
        title: news.header.title,
        description: news.header.description,
        icon: news.header.icon,
      },
      type: news.type,
      content: news.content,
      routerLink: news.routerLink,
      disabled: news.disabled,
    };
  }
}
