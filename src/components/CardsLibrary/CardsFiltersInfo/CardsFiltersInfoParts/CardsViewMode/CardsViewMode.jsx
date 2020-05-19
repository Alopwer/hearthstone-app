import React from 'react';
import s from '../../CardsFilters.module.scss';
import { FaGripHorizontal } from 'react-icons/fa';
import { MdViewHeadline } from 'react-icons/md';
import CardsViewModeItem from './CardsViewModeItem';

const CardsViewMode = ({ setViewMode, viewMode, isXSmall }) => {
    return <div className={s['viewmode']}>
            { !isXSmall && <span>View:</span> }
            <div className={s[`viewmode__btns`]}>
                <CardsViewModeItem value={''} 
                    Component={FaGripHorizontal} 
                    style={{borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px'}} 
                    setViewMode={setViewMode} 
                    viewMode={viewMode}
                    viewCondition={viewMode === 'table'}
                />
                <CardsViewModeItem value={'table'} 
                    Component={MdViewHeadline} 
                    style={{borderBottomRightRadius: '20px', borderTopRightRadius: '20px', borderTopLeftRadius: '0px'}} 
                    setViewMode={setViewMode} 
                    viewMode={viewMode}
                    viewCondition={viewMode !== 'table'}
                />
            </div>
        </div>
}

export default CardsViewMode;