import React from 'react';
import ManaAndClassFilters from './ManaAndClassFilters';
import OrderAndSortFilterContainer from '../../CardsLibrary/CardsFiltersInfo/CardsFiltersInfoParts/OrderAndSort/OrderAndSortFilterContainer';
import s from '../Filterbar.module.scss';
import { MdClear } from 'react-icons/md'

const FilterbarMobile = props => {

	return <>
        <div className={s['toggleButton_mobile']}>
            <span onClick={props.toggleAdditionalFilterbars}>
                <MdClear style={{
                    background: "none",
                    color: '#FCD144',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer'
                }}/>
                <span>Close</span> 
            </span>
        </div>
        <p>Sort:</p>
        <OrderAndSortFilterContainer />
        <p>Filters:</p>
        <ManaAndClassFilters />
    </>
};

export default FilterbarMobile;
