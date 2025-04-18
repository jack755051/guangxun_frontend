export interface ExpansionPanelItem {
  id: string;
  header: ExpansionPanelHeader;
  content: string;
  routerLink?: string;
}

export interface ExpansionPanelHeader {
  title: string;
  description: string;
}
