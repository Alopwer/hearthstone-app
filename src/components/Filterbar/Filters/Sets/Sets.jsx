import React from 'react'
import s from '../../Filterbar.module.scss'
import withCustomSelect from '../../../../hoc/withCustomSelect'
import { GiBarbedSun } from 'react-icons/gi'

const Sets = (props) => {
    return <div className={s['filterbar-top__element']}>
        {withCustomSelect({
            options: props.sets, 
            defaultValue: {
                value: 'Standard', 
                label: 'Standard Cards'
            },
            onChangeValue: props.onChangeSet,
            icon: <GiBarbedSun />,
            shrinkLg: true
        })}
    </div>    
}

export default Sets
