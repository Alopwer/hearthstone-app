import React from 'react';
import s from './CardsFilters.module.scss';
import CardsViewMode from './CardsFiltersInfoParts/CardsViewMode';
import OrderAndSortFilterContainer from './CardsFiltersInfoParts/OrderAndSortFilterContainer';
import ResetFilters from '../../common/ResetFiltes';

const CardsFiltersInfo = props => {
    const { gameMode, viewMode } = props.requestOptions
    const totalCardsInfo = props.totalCards 
        && <p className={s['filters-info__totalCards']}>{props.totalCards} cards found for {gameMode || props.actualSetName}</p> 

    return <div className={s[`filters-info${props.additionalFilterbars ? '_active' : ''}`]}>
        <div className={s['filters-info__left']}>
            { totalCardsInfo }
            { props.filterItems }
            {
                props.filterItems.filter(i => i.props.valueInfo).length > 1 
                && <button onClick={props.resetFilters}>
                    Reset All <ResetFilters />
                </button>
            }
        </div>
        <div className={s['filters-info__right']}>
            { viewMode !== 'table' && !props.isSmall && <OrderAndSortFilterContainer /> }
            <CardsViewMode viewMode={viewMode} setViewMode={props.setViewMode}/>
        </div>
    </div>
}

export default CardsFiltersInfo