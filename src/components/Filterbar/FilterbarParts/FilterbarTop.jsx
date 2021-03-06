import React from 'react';
import { SetsContainer, SearchContainer } from '../Filters';
import FilterbarBtn from '../FilterbarParts/FilterbarBtn';
import s from '../Filterbar.module.scss';
import ManaAndClassFilters from './ManaAndClassFilters';
import CustomScroll from 'react-custom-scroll'

const FilterbarTop = ({ classValue, classes, setClass, setClassName, ...props }) => {
	return <div className={s['filterbar-top']}>
        <SetsContainer />
        {!props.isSmall && <ManaAndClassFilters />}
        <SearchContainer />
        <FilterbarBtn 
            isLarge={props.isLarge}
            additionalFilterbars={props.additionalFilterbars}
            toggleAdditionalFilterbars={props.toggleAdditionalFilterbars}/>
    </div>
};

export default FilterbarTop;
