import React from 'react';
import withSelectFilter from '../../../../hoc/withSelectFilter';
import s from '../../Filterbar.module.scss';
import { TiSpiral } from 'react-icons/ti'

const ClassFilter = ({ classValue, classes, setClass, setClassName, isSmall }) => {
	return <>
        { !isSmall && <div className={s['filterbar-top__element']}>
            {withSelectFilter(classValue, setClass, 'Classes', classes, setClassName, <TiSpiral />)}
        </div> }
    </>
};

export default ClassFilter;
