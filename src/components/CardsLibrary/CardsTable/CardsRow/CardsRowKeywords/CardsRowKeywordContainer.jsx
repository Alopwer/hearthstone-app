import React from 'react'
import CardsRowKeyword from './CardsRowKeyword'
import { useState } from 'react'

const CardsRowKeywordContainer = (props) => {
    const [isHovered, toggleHovered] = useState(false)

    return <CardsRowKeyword isHovered={isHovered}
        toggleHovered={toggleHovered}
        {...props}/>
}

export default CardsRowKeywordContainer