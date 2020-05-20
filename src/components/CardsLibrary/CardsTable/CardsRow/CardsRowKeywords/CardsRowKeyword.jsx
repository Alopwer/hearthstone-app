import React from 'react'
import s from '../../CardsTable.module.scss';

const CardsRowKeyword = (props) => {
    return <>
        <span className={s['keyword__name']} onClick={() => props.onKeywordClick(props.kwd.name, props.kwd.slug)}
            onMouseEnter={() => {
                props.toggleHovered(true)
            }} 
            onMouseLeave={() => {
                props.toggleHovered(false)
            }}>
            { props.kwd.name }
        </span>
        { 
            props.isHovered && 
            <div className={s['keyword-info__full']}>
                <h4 className='textShadow'>{props.kwd.name}</h4>
                <p>{props.kwd.text}</p>
            </div> 
        }
    </>
}

export default CardsRowKeyword