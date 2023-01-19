import cn from 'classnames';
import React, { FC } from 'react';
import cat from '../../assets/images/cat.png';
import { ICard } from '../../model';
import styles from './styles.module.scss';

interface CardProps {
  card: ICard;
  changeCard: (id: number, prop: keyof ICard) => void;
}

export const Card: FC<CardProps> = ({ card, changeCard }) => {
  const handleSelect = () => {
    if (card.disabled) return;
    if (card.hovered) {
      changeCard(card.id, 'hovered');
    }
    changeCard(card.id, 'selected');
  };

  const handleHover = () => {
    if (card.selected) {
      if (card.hovered) {
        return;
      }
      changeCard(card.id, 'hovered');
    }
  };

  const cardClass = cn({
    [styles.card]: true,
    [styles.card_selected]: card.selected,
    [styles.card_disabled]: card.disabled,
  });

  const headerClass = cn({
    [styles.card__header]: true,
    [styles.card__header_hovered]: card.hovered,
  });

  return (
    <div className={styles.cardsContainer}>
      <div className={cardClass} onClick={handleSelect} onMouseLeave={handleHover}>
        <h4 className={headerClass}>
          {card.hovered ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
        </h4>
        <h2 className={styles.card__title}>Нямушка</h2>
        <h3 className={styles.card__subtitle}>{card.filling}</h3>
        {card.portions.map(portion => (
          <p key={portion.description} className={styles.card__description}>
            {portion.count && <span className={styles.card__description_bold}>{portion.count} </span>}
            {portion.description}
          </p>
        ))}
        <img src={cat} alt="cat" className={styles.card__img} />
        <div className={styles.card__label}>
          <p className={styles.card__label_title}>{card.weight}</p>
          <p className={styles.card__label_text}>кг</p>
        </div>
      </div>
      {!card.selected && !card.disabled && <p className={styles.card__footer}>Чего сидишь? Порадуй котэ,
        <span className={styles.card__footer_btn} onClick={handleSelect}>купи.</span></p>}
      {card.selected && !card.disabled && <p className={styles.card__footer}>{card.description}</p>}
      {card.disabled && <p className={styles.card__footer}>Печалька, {card.filling} закончился.</p>}
    </div>
  );
};
