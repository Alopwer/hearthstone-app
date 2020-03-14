import React from 'react';
import SortFilter from './SortFilter';
import { NavLink } from 'react-router-dom';

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
            <SortFilter sort={sort} order={order} onChangeSort={props.onChangeSort}/>
        }
        <div>
            View: <NavLink to=''onClick={() => props.setViewMode('')}>library </NavLink><NavLink to='?viewMode=table'onClick={() => props.setViewMode('table')}>table</NavLink>
        </div>
    </div>
}

export default CardsFiltersInfo