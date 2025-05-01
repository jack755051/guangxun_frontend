import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface FaIcon {
  icon: IconDefinition;
  label?: string;
}

export interface ExpansionPanelItem {
  header: ExpansionPanelHeader;
  type: ExpansionPanelType;
  content: string | NewsTypeContent;
  routerLink?: string;
}

export interface ExpansionPanelHeader {
  title: string;
  description: string;
  icon?: FaIcon;
}

export enum ExpansionPanelType {
  FIRE = 'fire',
  LIVE = 'live',
  TECHNICAL_SUPPORT = 'technical-support',
}

// ---- 以下為擴充功能 start ----

export interface NewsTypeContent {
  id: string;
  date: string;
  author: string;
  content: string;
}

// ---- 以下為擴充功能 end ----
