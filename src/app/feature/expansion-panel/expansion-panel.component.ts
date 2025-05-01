import { Component, Input, OnInit } from '@angular/core';
import {
  ExpansionPanelItem,
  ExpansionPanelType,
  FaIcon,
  NewsTypeContent,
} from './model/expansion-panel.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HomePageNewsIcons } from '../../shared/fa-icon';

@Component({
  selector: 'guangxun-expansion-panel',
  imports: [MatExpansionModule, CommonModule, FontAwesomeModule],
  standalone: true,
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
})
export class ExpansionPanelComponent implements OnInit {
  @Input() rawData: ExpansionPanelItem[] = [];
  @Input() expansionType: 'Hover' | 'Click' = 'Click';
  index: number | null = null;
  data: ExpansionPanelItem[] = [];

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

  isNewsTypeContent(content: string | NewsTypeContent): content is NewsTypeContent {
    return (
      typeof content !== 'string' && content !== null && 'date' in content && 'content' in content
    );
  }

  onHover(index: number, isHovering: boolean): void {
    this.index = isHovering ? index : null;
  }

  // ---- 擴充功能 end ----
}
