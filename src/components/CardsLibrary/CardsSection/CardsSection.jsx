import React from 'react';
import s from './CardsSection.module.scss';
import SingleCard from './SingleCard';

const ghostCards = (new Array(5)).fill(0).map((v, i) => <div key={i} className={s['ghost-card']}></div>)

const CardsSection = props => {
    const singleCards = props.cards.map(c => <SingleCard key={c.id} image={c.image} id={c.id}/>)
    return <div className={s['card-section']}>
        <h3>{props.nameClass}</h3>
        <div className={s['section-items']}>
            {singleCards}
            {ghostCards}
        </div>
    </div>
}

export default CardsSection;