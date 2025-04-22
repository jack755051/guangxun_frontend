import { ArrangeType } from '..';

export interface CardItemHeaderFaIcon {
  icon: string;
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
