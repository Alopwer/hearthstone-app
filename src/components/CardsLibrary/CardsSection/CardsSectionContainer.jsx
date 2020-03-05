import React from 'react';
import { connect } from 'react-redux';
import CardsSection from './CardsSection';

const CardsSectionContainer = ({ classes, cards }) => {
    const sections = classes.map((c, i) => {
        const availableCardsForClass = cards.filter(card => card.classId === c.id);
        const render = availableCardsForClass.length !== 0 && i !== 0;
        return (
            render && (
                <CardsSection
                    key={c.id}
                    cards={availableCardsForClass}
                    nameClass={c.name}
                />
            )
        );
    });

    return (
        <div>
            {console.log('cards section container render')}
            {sections}
        </div>
    );
};

const mapStateToProps = state => ({
    classes: state.appReducer.classes,
    cards: state.cardsReducer.cards
});

export default connect(mapStateToProps)(CardsSectionContainer);
