import React from 'react'
import s from '../../Filterbar.module.scss'
import '../../Scrollbar.scss'
import withCustomSelect from '../../../../hoc/withCustomSelect'

const Sets = (props) => {
    return <div className={s['filterbar-top__element']}>
        {withCustomSelect({
            options: props.sets, 
            defaultValue: {
                value: 'Standard', 
                label: 'Standard Cards'
            },
            onChangeValue: props.onChangeSet
        })}
    </div>
}

export default Sets
