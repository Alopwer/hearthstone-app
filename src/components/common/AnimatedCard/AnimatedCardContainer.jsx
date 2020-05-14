import React from 'react';
import { useSpring } from 'react-spring'
import AnimatedCard from './AnimatedCard';
import WithSizes from 'react-sizes';

const calc = (x, y, top, left, coef) => [(y - top) / coef, -(x - left) / coef,  1.1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AnimatedCardContainer = props => {
    const [styleProps, setStyleProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 500, friction: 50 } }))

    const onHoverCard = ({ clientX, clientY, currentTarget : cT }) => {
        const cTPos = cT.getBoundingClientRect()
        const calculatedPosition = calc(clientX, clientY, cTPos.top + cTPos.height / 2, cTPos.left + cTPos.width / 2, props.coef)
        setStyleProps({ xys: calculatedPosition })
    }

    return <AnimatedCard 
        onHoverCard={onHoverCard} 
        styleProps={styleProps} 
        setStyleProps={setStyleProps}
        trans={trans} 
        isLarge={props.isLarge}
        {...props}/>
}

const mapSizesToProps = ({ width }) => ({
    isLarge: width >= 992
})

export default WithSizes(mapSizesToProps)(AnimatedCardContainer);