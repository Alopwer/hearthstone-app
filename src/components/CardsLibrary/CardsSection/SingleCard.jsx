import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CardsSection.module.scss';
import { useSpring, animated } from 'react-spring'

const calc = (x, y, top, left) => [(y - top) / 12, -(x - left) / 12,  1.1]
const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SingleCard = props => {
    const [props1, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 500, friction: 50 } }))

    const onHoverCard = ({ clientX, clientY, currentTarget : cT, ...i }) => {
        const cTPos = cT.getBoundingClientRect()
        const calculatedPosition = calc(clientX, clientY, cTPos.top + cTPos.height / 2, cTPos.left + cTPos.width / 2)
        set({ xys: calculatedPosition })
    }

    return <NavLink key={props.id} to={`/cards/${props.id}`} className={s['section-items__link']}>
        <div className={s['section-items__item']}>
            <animated.div
                className={s["card"]}
                onMouseMove={onHoverCard}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props1.xys.interpolate(trans) }}
            >
                <img src={props.image} alt="card image" />
            </animated.div>
        </div>
    </NavLink>
}

export default SingleCard;