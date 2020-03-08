import React from 'react';
import SimpleInfo from './SimpleInfo';
import SortFilter from './SortFilter';

const CardsFiltersInfo = ({ requestOptions, totalCards, ...props }) => {
    const {class : classValue, textFilter, attack, health, type, minionType, keyword, gameMode, set, rarity, sort, order} = requestOptions

    const totalCardsInfo = totalCards && <p>{totalCards} cards found for {gameMode || set} Cards</p> || ''
    const className = classValue && classValue !== 'all' && classValue[0].toUpperCase() + classValue.slice(1)
    const manaCostInfo = props.manaCostBar && <p>Mana : {props.manaCostBar}  x</p>
    const attackInfo = attack && <p>Attack : {attack}  x</p>
    const healthInfo = health && <p>Health : {health}  x</p>
    const cardTypeInfo = type && <p>Card Type : {type}  x</p>
    const rarityInfo = rarity && <p>Rarity : {rarity}  x</p>
    const minionTypeInfo = minionType && <p>Minion Type : {minionType}  x</p>
    const keywordsInfo = keyword && <p>Keywords : {keyword}  x</p>

    return <div>
        {totalCardsInfo}
        <SimpleInfo setValue={props.setClass} valueInfo={className}/>
        <SimpleInfo setValue={props.resetManaCost} valueInfo={manaCostInfo}/>
        <SimpleInfo setValue={props.setTextFilter} valueInfo={textFilter}/>
        <SimpleInfo setValue={props.setAttack} valueInfo={attackInfo}/>
        <SimpleInfo setValue={props.setHealth} valueInfo={healthInfo}/>
        <SimpleInfo setValue={props.setCardType} valueInfo={cardTypeInfo}/>
        <SimpleInfo setValue={props.setRarity} valueInfo={rarityInfo}/>
        <SimpleInfo setValue={props.setMinionType} valueInfo={minionTypeInfo}/>
        <SimpleInfo setValue={props.setKeyword} valueInfo={keywordsInfo}/>
        <SortFilter sort={sort} order={order} onChangeSort={props.onChangeSort}/>
    </div>
}

export default CardsFiltersInfo