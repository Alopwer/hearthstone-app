import React from 'react'
import s from '../../Filterbar.module.scss'

const ManaButton = (props) => {
    return <button className={s['manaBtn']} onClick={() => props.onChangeManaCostButton(props.value)}>
        <h4 className={s['manaBtn__text']}>{props.value == 10 ? '10 +' : props.value}</h4>
    </button>
}

export default ManaButton;