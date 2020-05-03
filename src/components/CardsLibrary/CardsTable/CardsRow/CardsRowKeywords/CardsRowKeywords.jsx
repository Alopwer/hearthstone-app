import React from 'react'
import CardsRowKeywordContainer from './CardsRowKeywordContainer'

const CardsRowKeywords = ({ keywords, card, setKeyword, setKeywordName }) => {
    const filteredKeywords = keywords.filter(k => card.keywordIds.includes(k.id))

    const onKeywordClick = (name, slug) => {
        setKeywordName(name)
        setKeyword(slug)
    }

    const keywordItems = filteredKeywords.length !== 0 
        ? filteredKeywords.map(k => (<CardsRowKeywordContainer key={k.id} 
            onKeywordClick={onKeywordClick} 
            kwd={k} />))
        : '-'
        
    return <>{keywordItems}</>
}

export default CardsRowKeywords