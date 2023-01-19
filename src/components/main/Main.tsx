import React, { useCallback, useState } from 'react';
import { data } from '../../data';
import { ICard } from '../../model';
import { Card } from '../card';
import styles from './styles.module.scss';

const MemoCard = React.memo(Card);

export const Main = () => {
  const [cards, setCards] = useState<ICard[]>(data);
  const handleChangeCard = useCallback((id: number, prop: keyof ICard): void => {
    setCards(prev => prev.map((card => {
        if (card.id !== id) return card;
        return {
          ...card,
          [prop]: !card[prop],
        };
      })),
    );
  },[])
  return (
    <main className={styles.main}>
      {cards.map(card => (
        <MemoCard key={card.id} card={card} changeCard={handleChangeCard}  />
      ))}
    </main>
  );
};
