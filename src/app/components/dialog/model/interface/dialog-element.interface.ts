import { Type } from '@angular/core';
import { DialogButton } from './dialog-button.interface';
import { FaIcon } from './faicon.interface';

export interface DialogElementHeader {
  icon?: FaIcon;
  title: string;
}

export interface DialogElementFooter {
  buttons?: DialogButton[];
    onConfirm?: () => void;
    onSubmit?: () => void;
    onClose?: () => void;
}

export type DialogElementContent<T = unknown> =
  | { type: 'text'; text: string }
  | { type: 'form'; form: Type<T> };
