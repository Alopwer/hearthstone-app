import React from 'react'
import s from '../../CardsTable.module.scss';

const CardsRowKeyword = (props) => {
    return <>
        <span className={s['sss']} onClick={() => props.onKeywordClick(props.kwd.name, props.kwd.slug)}
            onMouseEnter={(e) => {
                props.handleFullInfoPos(e)
                props.toggleHovered(true)
            }} 
            onMouseLeave={(e) => {
                props.handleFullInfoPos(e)
                props.toggleHovered(false)
            }}>
            { props.kwd.name }
        </span>
        { 
            props.isHovered && 
            <div className={s['keyword-info_full']} 
                style={{
                    position: 'absolute',
                    top: '-80px'
                }}
            >
                <h4>{props.kwd.name}</h4>
                <p>{props.kwd.refText}</p>
            </div> 
        }
    </>
}

export default CardsRowKeyword