import { Injectable } from '@angular/core';
import { ArrangeType } from '..';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { CardArrangeTypeIcons } from '../models/fa-icon';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  isShowArrangeType(arrangeType: ArrangeType): boolean {
    switch (arrangeType) {
      case ArrangeType.GRID:
      case ArrangeType.LIST:
        return true;
      case ArrangeType.CENTER_STACK:
        return false;
    }
  }

  getArrangeTypeIcon(arrangeType: ArrangeType): IconDefinition {
    switch (arrangeType) {
      case ArrangeType.GRID:
        return CardArrangeTypeIcons.faBorderAll;
      case ArrangeType.LIST:
        return CardArrangeTypeIcons.faList;
      default:
        return CardArrangeTypeIcons.faList;
    }
  }
}
