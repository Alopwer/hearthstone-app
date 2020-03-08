import React from 'react'

const SortFilter = props => {
    return <select value={`${props.sort},${props.order}`} onChange={props.onChangeSort} >
        <option value="manaCost,asc">Mana: low to high</option>
        <option value="manaCost,desc">Mana: high to low</option>
        <option value="name,asc">Card Name: A to Z</option>
        <option value="name,desc">Card Name: Z to A</option>
        <option value="attack,asc">Attack: low to high</option>
        <option value="attack,desc">Attack: high to low</option>
        <option value="health,asc">Health: low to high</option>
        <option value="health,desc">Health: high to low</option>
    </select>
}

export default SortFilter