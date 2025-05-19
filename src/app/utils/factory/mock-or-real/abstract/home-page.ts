import { Observable } from 'rxjs';
import { IVideoViewModel } from '../../../../models/interface/feature/video.interface';
import { ExpansionPanelItem } from '../../../../feature/expansion-panel';
import { Cards } from '../../../../components/card';
import { TechnicalSupportFile } from '../../../../models/interface/feature/technical-support.interface';

export abstract class HomePage {
  abstract getVideo(): Observable<IVideoViewModel[]>;
  abstract getNews(): Observable<ExpansionPanelItem[]>;
  abstract getProducts(): Observable<Cards>;
  abstract getTechnicalSupports(): Observable<TechnicalSupportFile[]>;
}
