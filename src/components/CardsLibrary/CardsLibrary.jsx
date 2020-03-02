import React from 'react';
import Preloader from '../common/Preloader';
import SingleCardContainer from './SingleCard';

const CardsLibrary = (props) => {
    return (
        <div>
            {
                props.cards.length !== 0
                ? (
                    <div>
                        {props.cards.map(c => <SingleCardContainer key={c.id} image={c.image} />)}
                    </div>
                )
                : <Preloader />
            }
        </div>
    )
}

export default CardsLibrary;