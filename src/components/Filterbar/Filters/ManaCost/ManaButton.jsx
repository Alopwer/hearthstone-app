import React from 'react'
import s from '../../Filterbar.module.scss'

const ManaButton = (props) => {
    return <button className={props.manaCost.includes(props.value) ? s['manaBtn_active'] :s['manaBtn']} 
        onClick={() => props.onChangeManaCostButton(props.value)}
    >
        <h4 className={s['manaBtn__text']}>
            {/* TRY TO CENTER '+' CORRECTLY */}
            {
                props.value == 10 
                    ? '10 +'
                    : props.value
            }
        </h4>
    </button>
}

export default ManaButton;