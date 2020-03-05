import React from 'react';

const CardsSection = props => {
    return (
        <div>
            {console.log('cards section render')}
            <h3>{props.nameClass}</h3>
            {
                props.cards.map(c => (
                    <img key={c.id} src={c.image} alt="" />
                ))
            }
        </div>
    )
}

export default CardsSection;