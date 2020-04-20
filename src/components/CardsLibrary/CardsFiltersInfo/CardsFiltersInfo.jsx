import React from 'react';
import s from './CardsFilters.module.scss';
import CardsViewMode from './CardsFiltersInfoParts/CardsViewMode';
import OrderAndSortFilterContainer from './CardsFiltersInfoParts/OrderAndSortFilterContainer';

const CardsFiltersInfo = props => {
    const { gameMode, viewMode } = props.requestOptions
    const totalCardsInfo = props.totalCards && <p>{props.totalCards} cards found for {gameMode || props.actualSetName}</p> 

    return <div className={s[`filters-info${props.additionalFilterbars ? '_active' : ''}`]}>
        { totalCardsInfo }
        { props.filterItems }
        {
            props.filterItems.filter(i => i.props.valueInfo).length > 1 
            && <div onClick={props.resetFilters}>
                Reset All x
            </div>
        }
        { viewMode !== 'table' && <OrderAndSortFilterContainer /> }
        <CardsViewMode viewMode={viewMode} setViewMode={props.setViewMode}/>
    </div>
}

export default CardsFiltersInfo