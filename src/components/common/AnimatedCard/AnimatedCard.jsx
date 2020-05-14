import React from 'react';
import { animated } from 'react-spring'

const AnimatedCard = props => {
    return <animated.div
        className={props.style}
        onMouseMove={() => props.isLarge && props.onHoverCard}
        onMouseLeave={() => props.isLarge && props.setStyleProps({ xys: [0, 0, 1] })}
        style={{ transform: props.styleProps.xys.interpolate(props.trans) }}
    >
        <img src={props.image} alt="card image" />
    </animated.div>
}

export default AnimatedCard;