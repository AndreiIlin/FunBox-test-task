import { ICard } from './model';

export const data: ICard[] = [
  {
    id: 1,
    filling: 'с фуа-гра',
    portions: [
      { count: 10, description: 'порций' },
      { description: 'мышь в подарок' },
    ],
    description: 'Печень утки разварная с артишоками.',
    weight: '0,5',
    hovered: false,
    selected: false,
    disabled: false,
  },
  {
    id: 2,
    filling: 'с рыбой',
    portions: [
      { count: 40, description: 'порций' },
      { count: 2, description: 'мыши в подарок' },
    ],
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    weight: '2',
    hovered: false,
    selected: true,
    disabled: false,
  },
  {
    id: 3,
    filling: 'с курой',
    portions: [
      { count: 100, description: 'порций' },
      { count: 5, description: 'мышей в подарок' },
      { description: 'заказчик доволен' },
    ],
    description: 'Филе из цыплят с трюфелями в бульоне.',
    weight: '5',
    hovered: false,
    selected: false,
    disabled: true,
  },
];
