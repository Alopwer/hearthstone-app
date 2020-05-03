import React from 'react';
import { useState } from 'react';
import CardsRowImg from './CardsRowImg';

const CardsRowImgContainer = props => { 
    const [isHovered, toggleHovered] = useState(false)
    const [pos, setPos] = useState(null)

    const handleFullImgPos = (e) => {
        setPos(e.currentTarget.getBoundingClientRect())
    }

    return <CardsRowImg isHovered={isHovered} 
        toggleHovered={toggleHovered} 
        pos={pos} 
        handleFullImgPos={handleFullImgPos} 
        {...props} />
}

export default CardsRowImgContainer;