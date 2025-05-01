import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { ExpansionContentType, ExpansionPanelType } from './expansion-panel.enum';

export interface FaIcon {
  icon: IconDefinition;
  label?: string;
}

export interface ExpansionPanelItem {
  header: ExpansionPanelHeader;
  type: ExpansionPanelType;
  content: TextType | ArticleType;
  routerLink?: string;
  disabled?: boolean;
}

export interface ExpansionPanelHeader {
  title: string;
  description: string;
  icon?: FaIcon;
}

// ---- 以下為內容相關 start ----
export interface CommonType {
  id: string;
  type: ExpansionContentType;
  date: string;
}

export interface TextType extends CommonType {
  text: string;
}

export interface ArticleType extends CommonType {
  imagePath: string;
  title?: string;
  paragraphs?: string[];
  author?: string;
  publishedAt?: string;
}

export interface TemplateType extends CommonType {}

// ---- 以下為擴充功能 end ----
