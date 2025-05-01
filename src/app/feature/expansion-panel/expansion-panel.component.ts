import { Component, Input, OnInit, TemplateRef, ContentChild } from '@angular/core';
import {
  ExpansionPanelItem,
  FaIcon,
  ArticleType,
  TextType,
  TemplateType,
} from './model/expansion-panel.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HomePageNewsIcons } from '../../shared/fa-icon';
import { ExpansionContentType, ExpansionPanelType } from './model/expansion-panel.enum';

@Component({
  selector: 'guangxun-expansion-panel',
  imports: [MatExpansionModule, CommonModule, FontAwesomeModule],
  standalone: true,
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
})
export class ExpansionPanelComponent implements OnInit {
  @ContentChild('customPanelContent', { static: false })
  customTemplate?: TemplateRef<any>;

  @Input() rawData: ExpansionPanelItem[] = [];
  @Input() expansionType: 'Hover' | 'Click' = 'Click';
  index: number | null = null;
  data: ExpansionPanelItem[] = [];

  readonly ExpansionContentType = ExpansionContentType;
  constructor() {}

  ngOnInit(): void {
    this.data = this.rawData.map((item) => ({
      ...item,
      header: {
        ...item.header,
        icon: this.getIcon(item),
      },
    }));
  }

  // ---- 擴充功能 start ----

  private readonly iconMap: Record<ExpansionPanelType, IconDefinition> = {
    [ExpansionPanelType.FIRE]: HomePageNewsIcons.faFire,
    [ExpansionPanelType.LIVE]: HomePageNewsIcons.faGaugeHigh,
    [ExpansionPanelType.TECHNICAL_SUPPORT]: HomePageNewsIcons.faMicrochip,
  };

  getIcon(item: ExpansionPanelItem): FaIcon {
    return {
      icon: this.iconMap[item.type],
      label: item.header.title, // 或任何你想要加上的 label
    };
  }

  isTextType(content: unknown): content is TextType {
    return typeof content === 'object' && content !== null && 'text' in content;
  }

  isArticleType(content: unknown): content is ArticleType {
    return typeof content === 'object' && content !== null && 'imagePath' in content;
  }

  isTemplateType(content: unknown): content is TemplateType {
    return typeof content === 'object' && content !== null && 'template' in content;
  }

  onHover(index: number, entering: boolean): void {
    if (this.expansionType === 'Hover') {
      this.index = entering ? index : null;
    }
  }

  onClick(index: number): void {
    if (this.expansionType === 'Click') {
      this.index = this.index === index ? null : index;
    }
  }
  // ---- 擴充功能 end ----
}
