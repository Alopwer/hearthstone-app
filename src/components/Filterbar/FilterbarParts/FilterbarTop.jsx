import React from 'react';
import { SetsContainer, ManaCostContainer, SearchContainer } from '../Filters';
import withSelectFilter from '../../../hoc/withSelectFilter';
import s from '../Filterbar.module.scss';
import { TiSpiral } from 'react-icons/ti'

const FilterbarTop = ({ classValue, classes, setClass, setClassName, ...props }) => {
	return <div className={s['filterbar-top']}>
        <SetsContainer />
        { !props.isSmall && <div className={s['filterbar-top__element']}>
            {withSelectFilter(classValue, setClass, 'Classes', classes, setClassName, <TiSpiral />)}
        </div> }
        <ManaCostContainer />
        <SearchContainer />
    </div>
};

export default FilterbarTop;
