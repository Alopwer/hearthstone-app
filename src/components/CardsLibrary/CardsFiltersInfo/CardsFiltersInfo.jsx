import React from 'react';
import s from './CardsFilters.module.scss';
import CardsViewModeContainer from './CardsFiltersInfoParts/CardsViewMode/CardsViewModeContainer';
import OrderAndSortFilterContainer from './CardsFiltersInfoParts/OrderAndSort/OrderAndSortFilterContainer';
import ResetFilters from '../../common/ResetFiltes';

const CardsFiltersInfo = props => {
    const totalCardsInfo = props.totalCards 
        && <p className={s['filters-info__totalCards']}>{props.totalCards} cards found for {props.gameMode || props.actualSetName}</p> 

    return <div className={s[`filters-info${props.additionalFilterbars ? '_active' : ''}`]}>
        <div className={s['filters-info__left']}>
            { totalCardsInfo }
            { props.filterItems }
            {
                props.filterItems.filter(i => i.props.valueInfo).length > 1 
                && <button onClick={props.resetFilters} className={`${s['clearInfoBtn']} ${s['clearInfoBtn_reset']}`}>
                    <ResetFilters /> Reset All
                </button>
            }
        </div>
        <div className={s['filters-info__right']}>
            { props.viewMode !== 'table' && !props.isSmall && <OrderAndSortFilterContainer /> }
            <CardsViewModeContainer />
        </div>
    </div>
}

export default CardsFiltersInfo