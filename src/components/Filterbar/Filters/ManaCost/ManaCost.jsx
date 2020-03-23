import React from 'react'
import s from '../../Filterbar.module.scss'

const ManaCost = (props) => {
    return (
        <div className={s['filterbar-top__element']}>
            <select className={s['filterbar-select']} value={props.manaCost} onChange={props.onChangeManaCostSelect}>
                { props.manaCostItems }
            </select>
            {/* <div onClick={props.onChangeManaCostButton}>
                { props.manaCostItems }
            </div> */}
        </div>
    )
}

export default ManaCost;