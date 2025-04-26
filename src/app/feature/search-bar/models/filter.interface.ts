export interface FilterButton {
  label: string;
  value: string;
  icon: string;
  isActive: boolean;
  action: () => void;
}
