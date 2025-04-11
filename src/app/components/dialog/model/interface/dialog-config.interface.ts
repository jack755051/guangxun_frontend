import { DialogType } from '../enum/dialog-type.enum';
import { MatDialogConfig } from '@angular/material/dialog';
import {
  DialogElementContent,
  DialogElementFooter,
  DialogElementHeader,
} from './dialog-element.interface';

export interface GxunDialogConfig<T = void, R = unknown> extends MatDialogConfig<T> {
  type: DialogType;
  //element
  header: DialogElementHeader;
  //TODO 如果要動態插入表單元件，後需處理any問題
  content?: DialogElementContent<R>;
  footer: DialogElementFooter;
}
