import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { ArrangeType, ArrangeTypeMeta } from '..';
import { CardArrangeTypeIcons } from './fa-icon';

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

// 排列方式圖示

export const ARRANGE_TYPE_ICON_MAP: Record<ArrangeType, IconDefinition> = {
  [ArrangeType.GRID]: CardArrangeTypeIcons.faBorderAll,
  [ArrangeType.LIST]: CardArrangeTypeIcons.faList,
  [ArrangeType.CENTER_STACK]: CardArrangeTypeIcons.faLayerGroup,
};

export const ARRANGE_TYPE_SHOW_TOGGLE_MAP: Record<ArrangeType, boolean> = {
  [ArrangeType.GRID]: true,
  [ArrangeType.LIST]: true,
  [ArrangeType.CENTER_STACK]: false,
};

export const ARRANGE_TYPE_META_MAP: Record<ArrangeType, ArrangeTypeMeta> = {
  [ArrangeType.GRID]: {
    icon: CardArrangeTypeIcons.faBorderAll,
    showInToggle: true,
  },
  [ArrangeType.LIST]: {
    icon: CardArrangeTypeIcons.faList,
    showInToggle: true,
  },
  [ArrangeType.CENTER_STACK]: {
    icon: CardArrangeTypeIcons.faLayerGroup,
    showInToggle: false,
  },
};
