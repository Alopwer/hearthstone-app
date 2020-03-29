import React from 'react'
import s from '../../Filterbar.module.scss'

const ManaCostButtons = (props) => {
    const manaCostItems = []
    for (let i = 0; i <= 10; i++) {
        manaCostItems.push(
            <button key={i} value={i}>{ i }</button>
        )
    }

    return (
        <div className={s['filterbar-top__element']}>
            <div onClick={props.onChangeManaCostButton}>
                { manaCostItems }
            </div>
        </div>
    )
}

export default ManaCostButtons;