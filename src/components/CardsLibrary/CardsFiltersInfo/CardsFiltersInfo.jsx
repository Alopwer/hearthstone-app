import React from 'react';
import SortFilter from './SortFilter';

const CardsFiltersInfo = ({ requestOptions, totalCards, ...props }) => {
    const { gameMode, set, sort, order } = requestOptions

    const totalCardsInfo = totalCards && <p>{totalCards} cards found for {gameMode || set} Cards</p> || ''
    // const className = classValue && classValue !== 'all' && classValue[0].toUpperCase() + classValue.slice(1)
    // const manaCostInfo = props.manaCostBar && <p>Mana : {props.manaCostBar}  x</p>
    // const attackInfo = attack && <p>Attack : {attack}  x</p>
    // const healthInfo = health && <p>Health : {health}  x</p>
    // const cardTypeInfo = type && <p>Card Type : {type}  x</p>
    // const rarityInfo = rarity && <p>Rarity : {rarity}  x</p>
    // const minionTypeInfo = minionType && <p>Minion Type : {minionType}  x</p>
    // const keywordsInfo = keyword && <p>Keywords : {keyword}  x</p>

    return <div>
        { totalCardsInfo }
        { props.filterItems }
        {
            props.filterItems.filter(i => i.props.valueInfo).length > 1 
            && <div onClick={props.resetFilters}>
                Reset All x
            </div>
        }
        <SortFilter sort={sort} order={order} onChangeSort={props.onChangeSort}/>
        <div>
            View: <span onClick={() => props.setViewMode('')}>library </span><span onClick={() => props.setViewMode('table')}>table</span>
        </div>
    </div>
}

export default CardsFiltersInfo