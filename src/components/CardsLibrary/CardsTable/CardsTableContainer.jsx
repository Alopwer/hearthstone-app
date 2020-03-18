import React from 'react';
import CardsTable from './CardsTable';
import { connect } from 'react-redux';
import CardsRow from './CardsRow/CardsRow';
import {setKeyword, setMinionType, setOrderAndSort} from '../../../redux/requestReducer';
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

    const onChangeSort = (value) => {
        if (props.order === 'desc') {
            props.setOrderAndSort(`${value},asc`.split(','))
        } else {
            props.setOrderAndSort(`${value},desc`.split(','))
        }
    }

    return <CardsTable cardsItems={cardsRows} onChangeSort={onChangeSort}/>
}

const mapStateToProps = state => ({
    cards: state.cardsReducer.cards,
    order: state.requestReducer.options.order,
    metadata: state.appReducer.metadata
});

export default connect(mapStateToProps, {
    setKeyword, setMinionType, setOrderAndSort, setKeywordName, setMinionTypeName
})(CardsTableContainer)