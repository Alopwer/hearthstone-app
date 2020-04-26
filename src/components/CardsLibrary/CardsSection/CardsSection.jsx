import React from 'react';
import s from './CardsSection.module.scss';
import SingleCard from './SingleCard';

const CardsSection = props => {
    const singleCards = props.cards.map(c => <SingleCard {...c}/>)
    const ghostCards = [0,0,0,0,0].map(el => <div className={s['ghost-card']}></div>)
    return (
        <div className={s['card-section']}>
            <h3>{props.nameClass}</h3>
            <div className={s['section-items']}>
                {singleCards}
                {ghostCards}
            </div>
        </div>
    )
}

export default CardsSection;