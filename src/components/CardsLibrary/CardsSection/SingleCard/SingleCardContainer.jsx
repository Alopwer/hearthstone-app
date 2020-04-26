import React from 'react';
import { useSpring } from 'react-spring'
import SingleCard from './SingleCard';

const calc = (x, y, top, left) => [(y - top) / 12, -(x - left) / 12,  1.1]
const trans = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SingleCardContainer = props => {
    const [styleProps, setStyleProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 500, friction: 50 } }))

    const onHoverCard = ({ clientX, clientY, currentTarget : cT }) => {
        const cTPos = cT.getBoundingClientRect()
        const calculatedPosition = calc(clientX, clientY, cTPos.top + cTPos.height / 2, cTPos.left + cTPos.width / 2)
        setStyleProps({ xys: calculatedPosition })
    }

    return <SingleCard 
        onHoverCard={onHoverCard} 
        styleProps={styleProps} 
        setStyleProps={setStyleProps}
        trans={trans} 
        {...props}/>
}

export default SingleCardContainer;