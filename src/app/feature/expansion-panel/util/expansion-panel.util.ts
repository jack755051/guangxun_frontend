// expansion-panel.utils.ts
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ExpansionPanelType, FaIcon } from '..';
import { HomePageNewsIcons } from '../../../shared/fa-icon';

const iconMap: Record<ExpansionPanelType, IconDefinition> = {
  [ExpansionPanelType.FIRE]: HomePageNewsIcons.faFire,
  [ExpansionPanelType.LIVE]: HomePageNewsIcons.faGaugeHigh,
  [ExpansionPanelType.TECHNICAL_SUPPORT]: HomePageNewsIcons.faMicrochip,
};

export function getExpansionIcon(type: ExpansionPanelType, label: string): FaIcon {
  return {
    icon: iconMap[type],
    label,
  };
}