import React from 'react';
import s from './CardsFilters.module.scss';

const SimpleInfo = props => {
    return <>
        { 
            props.valueInfo && 
            <button onClick={() => props.resetValue('')} className={s['clearInfoBtn']}>
                <span>{props.valueInfo}</span><span>✕</span> 
            </button> 
        }
    </>
}

export default SimpleInfo