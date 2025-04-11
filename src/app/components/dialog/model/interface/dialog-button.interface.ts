import { DialogButtonType } from '../enum/dialog-button-dialog.enum';

export interface DialogButton {
  type: DialogButtonType;
  label?: string;
  action?: () => void;
}
