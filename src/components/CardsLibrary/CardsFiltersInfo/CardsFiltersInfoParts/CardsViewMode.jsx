import React from 'react';
import s from '../CardsFilters.module.scss';
import { FaGripHorizontal } from 'react-icons/fa'
import { MdViewHeadline } from 'react-icons/md'

const CardsViewMode = ({ setViewMode, viewMode, isXSmall }) => {
    return <div className={s['viewmode']}>
            { !isXSmall && <span>View:</span> }
            <div className={s[`viewmode__btns`]}>
                <span onClick={() => setViewMode('')}><FaGripHorizontal className={s['react-icons']} style={{
                    background: `${viewMode === 'table' ? 'transparent' : '#FFFF94'}`,
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                }}/></span>
                <span onClick={() => setViewMode('table')}><MdViewHeadline className={s['react-icons']} style={{
                    background: `${viewMode !== 'table' ? 'transparent' : '#FFFF94'}`,
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                }}/></span>
            </div>
        </div>
}

export default CardsViewMode