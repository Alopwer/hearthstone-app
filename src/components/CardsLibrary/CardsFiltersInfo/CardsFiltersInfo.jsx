import React from 'react';
import OrderAndSortFilter from './OrderAndSortFilter';

const CardsFiltersInfo = ({ requestOptions, totalCards, ...props }) => {
    const { gameMode, set, sort, order, viewMode } = requestOptions
    const totalCardsInfo = totalCards && <p>{totalCards} cards found for {gameMode || set} Cards</p> || ''

    return <div>
        { totalCardsInfo }
        { props.filterItems }
        {
            props.filterItems.filter(i => i.props.valueInfo).length > 1 
            && <div onClick={props.resetFilters}>
                Reset All x
            </div>
        }
        {
            viewMode !== 'table' &&
            <OrderAndSortFilter orderAndSort={props.orderAndSort} sort={sort} order={order} onChangeSort={props.onChangeSort}/>
        }
        <div>
            View: <span onClick={() => props.setViewMode('')}>library </span><span onClick={() => props.setViewMode('table')}>table</span>
        </div>
    </div>
}

export default CardsFiltersInfo