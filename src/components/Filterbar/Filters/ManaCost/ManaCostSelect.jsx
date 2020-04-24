import React from 'react'
import s from '../../Filterbar.module.scss'
import withCustomSelect from '../../../../hoc/withCustomSelect'
import { FiHexagon } from 'react-icons/fi'

const ManaCostSelect = (props) => {
    const manaCostItems = []
    manaCostItems.push({value: '', label: 'All Cost'})
    for (let i = 0; i <= 10; i++) {
        manaCostItems.push({value: i, label: i})
    }

    return (
        <div className={`${s['filterbar-top__element']} ${s['filterbar-top__filter']}`}>
            {withCustomSelect({
                options: manaCostItems,
                value: manaCostItems.find(m => props.manaCost && m.value == props.manaCost.join('')),
                onChangeValue: props.onChangeManaCostSelect,
                icon: <FiHexagon />
            })}
        </div>
    )
}

export default ManaCostSelect;