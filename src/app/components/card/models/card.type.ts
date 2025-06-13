import { ArrangeType } from '..';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface CardItemHeaderFaIcon {
  icon: IconDefinition;
  color: string;
}

export interface CardItemHeaderImage {
  link: string;
  alt: string;
}

export type CardItemHeaderAvatar = CardItemHeaderFaIcon | CardItemHeaderImage;

export const TOGGLABLE_ARRANGE_TYPES: ArrangeType[] = [
  ArrangeType.GRID,
  ArrangeType.LIST,
  ArrangeType.CENTER_STACK,
];
