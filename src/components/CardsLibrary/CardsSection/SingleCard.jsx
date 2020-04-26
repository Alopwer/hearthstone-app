import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CardsSection.module.scss';
import { useSpring, animated } from 'react-spring'

const calc = (x, y, top, left) => [(y - (top + 165)) / 12, -(x - (left + 120)) / 12,  1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SingleCard = props => {
    const [props1, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 500, friction: 50 } }))

    return <NavLink key={props.id} to={`/cards/${props.id}`} className={s['section-items__link']}>
        <div className={s['section-items__item']}>
            <animated.div
                className={s["card"]}
                onMouseMove={({ clientX, clientY, currentTarget : cT }) => {return set({ xys: calc(clientX, clientY, cT.offsetTop, cT.offsetLeft) })}}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props1.xys.interpolate(trans) }}
            >
                <img src={props.image} alt="card image" />
            </animated.div>
        </div>
    </NavLink>
}

export default SingleCard;