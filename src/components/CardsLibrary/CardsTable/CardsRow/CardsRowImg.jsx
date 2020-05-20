import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../CardsTable.module.scss';


const CardsRowImg = props => (
    <td className={s['card-row__card']}>
        <NavLink className={s['card-img']} 
            onMouseEnter={(e) => {
                props.handleFullImgPos(e)
                props.toggleHovered(true)
            }} 
            onMouseLeave={(e) => {
                props.handleFullImgPos(e)
                props.toggleHovered(false)
            }}
            to={`/cards/${props.id}`} 
        >
            <span className={s['card-img__link']}>
                { props.name }
            </span>
            <div className={s['card-img__mask']}></div>
            <div className={s['card-img__img']} style={{ backgroundImage: `url(${props.cropImg})` }}></div>
        </NavLink>
        { props.isHovered && <div 
            className={s['card-img_full']} 
            style={{
                backgroundImage: `url(${props.image})`,
                left: props.pos.left + props.pos.width + 20,
                top: props.pos.top - 140
            }}></div> }
    </td>
)

export default CardsRowImg;