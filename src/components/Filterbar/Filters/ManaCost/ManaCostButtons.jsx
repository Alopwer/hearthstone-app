import React from 'react'
import s from '../../Filterbar.module.scss'
import ManaButton from './ManaButton'

const ManaCostButtons = (props) => {
    const manaCostItems = []
    for (let i = 0; i <= 10; i++) {
        manaCostItems.push(<ManaButton onChangeManaCostButton={props.onChangeManaCostButton} key={i} value={i} />)
    }

    return (
        <div className={s['filterbar-top__element']}>
            <div className={s['filterbar-top__manaCostBar']}>
                { manaCostItems }
            </div>
        </div>
    )
}

export default ManaCostButtons;