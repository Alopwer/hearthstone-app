import React from 'react'
import CardsRowKeyword from './CardsRowKeyword'
import { useState } from 'react'

const CardsRowKeywordContainer = (props) => {
    const [isHovered, toggleHovered] = useState(false)
    const [pos, setPos] = useState(null)

    const handleFullInfoPos = (e) => {
        setPos(e.currentTarget.getBoundingClientRect())
    }

    return <CardsRowKeyword isHovered={isHovered}
        toggleHovered={toggleHovered}
        pos={pos}
        handleFullInfoPos={handleFullInfoPos}
        {...props}/>
}

export default CardsRowKeywordContainer