import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {
  faCircleExclamation,
  faCircleQuestion,
  faCircleXmark,
  faCircleInfo,
  faCircleCheck,
  faIndent,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export interface FaIcon {
  icon: IconDefinition;
  label?: string;
}

export const FaIconsList = {
  faCircleExclamation, // !
  faCircleQuestion, // ?
  faCircleXmark, // X
  faCircleInfo, // i
  faCircleCheck, // ✓
  faIndent, // form
  faXmark, // ✕
};
