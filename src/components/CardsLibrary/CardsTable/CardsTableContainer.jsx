import React from 'react';
import CardsTable from './CardsTable';
import { connect } from 'react-redux';
import CardsRow from './CardsRow/CardsRow';
import {setKeyword, setMinionType} from '../../../redux/requestReducer';
import {setMinionTypeName, setKeywordName } from '../../../redux/staticInfoReducer';

const CardsTableContainer = props => {
    const cardsRows = props.cards.map(c => <CardsRow key={c.id} 
        card={c} 
        metadata={props.metadata} 
        setKeyword={props.setKeyword} 
        setMinionType={props.setMinionType}
        setMinionTypeName={props.setMinionTypeName}
        setKeywordName={props.setKeywordName}
    />)

    return <CardsTable cardsItems={cardsRows} />
}

const mapStateToProps = state => ({
    cards: state.cardsReducer.cards,
    metadata: state.appReducer.metadata
});

export default connect(mapStateToProps, {
    setKeyword, setMinionType, setKeywordName, setMinionTypeName
})(CardsTableContainer)