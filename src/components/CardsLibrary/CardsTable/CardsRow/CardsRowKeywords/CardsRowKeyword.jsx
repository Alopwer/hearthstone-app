import React from 'react'

const CardsRowKeyword = (props) => {
    return <>
        <span onClick={() => props.onKeywordClick(props.kwd.name, props.kwd.slug)}
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
            <div 
            // className={s['keyword-info_full']} 
                style={{
                    position: 'absolute',
                    top: '-80px'
                }}
            >
                {props.kwd.name}
                {props.kwd.refText}
            </div> 
        }
    </>
}

export default CardsRowKeyword