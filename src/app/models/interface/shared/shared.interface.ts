import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
/**
 * 社群連結
 */
export interface FaIconWithLink {
  icon: IconDefinition;
  link: string;
}
/**
 * 標籤連結
 */
export interface LabeledLink {
  label: string;
  link: string;
}