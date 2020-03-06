import React from 'react';

const CardsSection = props => {
    const singleCards = props.cards.map(c => (
        <img key={c.id} src={c.image} alt="" />
    ))

    return (
        <div>
            {console.log('cards section render')}
            <h3>{props.nameClass}</h3>
            {singleCards}
        </div>
    )
}

export default CardsSection;