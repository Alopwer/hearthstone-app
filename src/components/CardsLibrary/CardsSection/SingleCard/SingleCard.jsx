import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../CardsSection.module.scss';
import { animated } from 'react-spring'

const SingleCard = props => {

    return <NavLink key={props.id} to={`/cards/${props.id}`} className={s['section-items__link']}>
        <div className={s['section-items__item']}>
            <animated.div
                className={s["card"]}
                onMouseMove={props.onHoverCard}
                onMouseLeave={() => props.setStyleProps({ xys: [0, 0, 1] })}
                style={{ transform: props.styleProps.xys.interpolate(props.trans) }}
            >
                <img src={props.image} alt="card image" />
            </animated.div>
        </div>
    </NavLink>
}

export default SingleCard;