import React from 'react'
import s from './KeywordInfo.module.scss';

const KeywordInfo = (props) => {
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
            <div className={s['keyword-info__full']} style={props.style}>
                <h4 className='textShadow'>{props.kwd.name}</h4>
                <p>{props.kwd.text}</p>
            </div> 
        }
    </>
}

export default KeywordInfo