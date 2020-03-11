import React from 'react';
import { connect } from 'react-redux';
import CardsSection from './CardsSection';

const CardsSectionContainer = ({ classes, cards }) => {
    const sections = classes.map((c, i) => {
        const availableCardsForClass = cards.filter(card => card.classId === c.id);
        const canRender = availableCardsForClass.length !== 0 && i !== 0;
        return canRender && <CardsSection key={c.id}
            cards={availableCardsForClass}
            nameClass={c.name}
        />
    });

    return <div>
        { sections }
    </div>
};

const mapStateToProps = state => ({
    classes: state.appReducer.metadata.classes,
    cards: state.cardsReducer.cards
});

export default connect(mapStateToProps)(CardsSectionContainer);
