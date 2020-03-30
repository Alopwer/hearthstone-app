import React from 'react'
import s from '../../Filterbar.module.scss'
import { FiHexagon } from 'react-icons/fi'

const ManaButton = (props) => {
    return <button className={s['manaBtn']} onClick={() => props.onChangeManaCostButton(props.value)}>
        <span className={s['manaBtn__text']}>{props.value}</span>
    </button>
}

export default ManaButton;