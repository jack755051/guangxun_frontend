import { ArrangeType } from '..';

export const CARD_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'card-grid-style',
  [ArrangeType.CENTER_STACK]: 'card-center-stack-style',
  [ArrangeType.LIST]: 'card-list-style',
};

export const HEADER_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'header-grid-style',
  [ArrangeType.CENTER_STACK]: 'header-center-stack-style',
  [ArrangeType.LIST]: 'header-list-style',
};

export const CONTENT_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'content-grid-style',
  [ArrangeType.CENTER_STACK]: 'content-center-stack-style',
  [ArrangeType.LIST]: 'content-list-style',
};

export const FOOTER_CLASS_MAP: Record<ArrangeType, string> = {
  [ArrangeType.GRID]: 'footer-grid-style',
  [ArrangeType.CENTER_STACK]: 'footer-center-stack-style',
  [ArrangeType.LIST]: 'footer-list-style',
};
