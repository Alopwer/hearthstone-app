import React from 'react'
import s from './Filterbar.module.scss'

const SimpleFilter = (props) => {
    return (
        <select className={s['filterbar-select']} value={props.value} onChange={(e) => {
            props.setValue(e.target.value)
            const index = e.nativeEvent.target.selectedIndex;
            const name = e.nativeEvent.target[index].text
            props.setName && props.setName(name)
        }}>
            {props.renderItems}
        </select>
    )
}

export default SimpleFilter;