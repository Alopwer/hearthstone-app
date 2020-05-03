import React from 'react';
import CardsTable from './CardsTable';
import { connect } from 'react-redux';
import CardsRow from './CardsRow/CardsRow';
import {setKeyword, setMinionType} from '../../../redux/requestReducer';
import {setMinionTypeName, setKeywordName } from '../../../redux/staticInfoReducer';
import { compose } from 'redux';
import WithSizes from 'react-sizes';

const CardsTableContainer = props => {
    const cardsRows = props.cards.map(c => <CardsRow key={c.id} 
        card={c} 
        metadata={props.metadata} 
        setKeyword={props.setKeyword} 
        setMinionType={props.setMinionType}
        setMinionTypeName={props.setMinionTypeName}
        setKeywordName={props.setKeywordName}
        isXLarge={props.isXLarge}
        isLarge={props.isLarge}
        isMedium={props.isMedium}
        isSmall={props.isSmall}
        isXSmall={props.isXSmall}
    />)

    return <CardsTable cardsItems={cardsRows} 
        isXLarge={props.isXLarge}
        isLarge={props.isLarge}
        isMedium={props.isMedium}
        isSmall={props.isSmall}
        isXSmall={props.isXSmall}/>
}

const mapStateToProps = state => ({
    cards: state.cardsReducer.cards,
    metadata: state.appReducer.metadata
});

const mapSizesToProps = ({ width }) => ({
    isXLarge: width > 1200,
    isLarge: width > 1039,
    isMedium: width > 914,
    isSmall: width > 786,
    isXSmall: width > 600
});

export default compose( 
    WithSizes(mapSizesToProps),
    connect(mapStateToProps, {setKeyword, setMinionType, setKeywordName, setMinionTypeName})
)(CardsTableContainer)