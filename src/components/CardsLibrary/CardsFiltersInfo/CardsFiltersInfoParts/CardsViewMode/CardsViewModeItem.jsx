import React from 'react';
import s from '../../CardsFilters.module.scss';

const CardsViewModeItem = ({ value, Component, style, setViewMode, viewMode, viewCondition }) => {
    return <span onClick={() => setViewMode(value)}><Component className={s['react-icons']} style={{
        background: `${viewCondition ? 'transparent' : '#FFFF94'}`,
        borderTopLeftRadius: '20px',
        ...style
    }}/></span>
}

export default CardsViewModeItem;