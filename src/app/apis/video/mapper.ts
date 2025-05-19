import { IVideoViewModel } from '../../models/interface/feature/video.interface';

export class VideoMapper {
  public static VideoToViewModel(data: any): IVideoViewModel | IVideoViewModel[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.mapVideoToViewModel(item));
    }
    return this.mapVideoToViewModel(data);
  }

  private static mapVideoToViewModel(video: any): IVideoViewModel {
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      streamUrl: video.streamUrl,
    };
  }
}
