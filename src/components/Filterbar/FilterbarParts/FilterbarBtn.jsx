import React from 'react';
import s from '../Filterbar.module.scss';
import { GoSettings } from 'react-icons/go'

const FilterbarBtn = ({ additionalFilterbars, toggleAdditionalFilterbars, isLarge }) => {
    return <div className={s['toggleButton']}>
        <button className={s[`toggleButton__btn${additionalFilterbars ? '_active' : ''}`]} 
                onClick={toggleAdditionalFilterbars}>
                <GoSettings style={{
                    background: 'transparent',
                    color: '#472C11',
                    border: 'none',
                    fontSize: '1.6rem'
                }}/>
            {isLarge && <span>Filters</span>}
        </button>
    </div> 
};

export default FilterbarBtn;
