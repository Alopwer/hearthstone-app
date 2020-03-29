import React from 'react'
import s from '../../Filterbar.module.scss'

const ManaCostSelect = (props) => {
    const manaCostItems = []
    manaCostItems.push(<option key={11} value={''}>All cost</option>)
    for (let i = 0; i <= 10; i++) {
        manaCostItems.push(
            <option key={i} value={i}>{ i }</option>
        )
    }

    return (
        <div className={s['filterbar-top__element']}>
            <select className={s['filterbar-select']} value={props.manaCost} onChange={props.onChangeManaCostSelect}>
                { manaCostItems }
            </select>
        </div>
    )
}

export default ManaCostSelect;