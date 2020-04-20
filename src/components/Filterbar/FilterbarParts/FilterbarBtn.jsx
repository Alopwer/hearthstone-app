import React from 'react';
import s from '../Filterbar.module.scss';
import { GoSettings } from 'react-icons/go'

const FilterbarBtn = ({ additionalFilterbars, toggleAdditionalFilterbars }) => {

    return <button className={s[`toggleButton${additionalFilterbars ? '_active' : ''}`]} 
        onClick={toggleAdditionalFilterbars}>
        <GoSettings style={{
            background: 'transparent',
            color: '#472C11',
            border: 'none',
            fontSize: '1.6rem'
        }}/>
        Filters
    </button>
};

export default FilterbarBtn;
