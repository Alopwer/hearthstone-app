import React from 'react';
import { NavLink } from 'react-router-dom';

const CardsSection = props => {
    const singleCards = props.cards.map(c => (
        <NavLink key={c.id} to={`/${c.id}`}><img src={c.image} alt="" /></NavLink>
    ))

    return (
        <div>
            <h3>{props.nameClass}</h3>
            {singleCards}
        </div>
    )
}

export default CardsSection;