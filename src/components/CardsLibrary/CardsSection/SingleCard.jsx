import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CardsSection.module.scss';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [(x - window.innerWidth / 2) / 20, (y - window.innerHeight / 2) / 20,  1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SingleCard = props => {
    const [props1, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return <NavLink key={props.id} to={`/cards/${props.id}`} className={s['section-items__link']}>
        <div className={s['section-items__item']}>
            <animated.div
                class="card"
                onMouseMove={(event) => {debugger; return set({ xys: calc(event.clientX, event.clientY) })}}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props1.xys.interpolate(trans) }}
            >
                <img src={props.image} alt="card image" />
            </animated.div>
        </div>
    </NavLink>
}

export default SingleCard;