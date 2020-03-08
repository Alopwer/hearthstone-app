import React from 'react';

const CardsFiltersInfo = ({ requestOptions, totalCards, ...props }) => {
    const {class : classValue, textFilter, attack, health, type, minionType, keyword, gameMode, set, rarity} = requestOptions

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
        <div onClick={() => props.setClass('')}>
            {className}
        </div>
        <div onClick={() => props.resetManaCost()}>
            {manaCostInfo}
        </div>
        <div onClick={() => props.setTextFilter('')}>
            {textFilter}
        </div>
        <div onClick={() => props.setAttack('')}>
            {attackInfo}
        </div>
        <div onClick={() => props.setHealth('')}>
            {healthInfo}
        </div>
        <div onClick={() => props.setCardType('')}>
            {cardTypeInfo}
        </div>
        <div onClick={() => props.setRarity('')}>
            {rarityInfo}
        </div>
        <div onClick={() => props.setMinionType('')}>
            {minionTypeInfo}
        </div>
        <div onClick={() => props.setKeyword('')}>
            {keywordsInfo}
        </div>
    </div>
}

export default CardsFiltersInfo