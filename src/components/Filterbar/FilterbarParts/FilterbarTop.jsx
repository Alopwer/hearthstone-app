import React from 'react';
import { SetsContainer, ManaCostContainer, SearchContainer } from '../Filters';
import FilterbarBtn from '../FilterbarParts/FilterbarBtn';
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
        <FilterbarBtn 
            isLarge={props.isLarge}
            additionalFilterbars={props.additionalFilterbars}
            toggleAdditionalFilterbars={props.toggleAdditionalFilterbars}/>
    </div>
};

export default FilterbarTop;
