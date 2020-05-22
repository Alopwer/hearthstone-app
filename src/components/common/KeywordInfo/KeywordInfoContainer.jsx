import React from 'react'
import KeywordInfo from './KeywordInfo'
import { useState } from 'react'

const KeywordInfoContainer = (props) => {
    const [isHovered, toggleHovered] = useState(false)

    return <KeywordInfo isHovered={isHovered}
        toggleHovered={toggleHovered}
        {...props}/>
}

export default KeywordInfoContainer