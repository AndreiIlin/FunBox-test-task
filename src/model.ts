
interface Portion {
  count?: number;
  description: string;
}

export interface ICard {
  id: number;
  filling: string;
  portions: Portion[];
  weight: string;
  description: string;
  selected: boolean;
  hovered: boolean;
  disabled: boolean;
}
