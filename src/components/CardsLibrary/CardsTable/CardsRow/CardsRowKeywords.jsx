import React from 'react'
import KeywordInfoContainer from '../../../common/KeywordInfo/KeywordInfoContainer'

const CardsRowKeywords = ({ keywords, card, setKeyword, setKeywordName }) => {
    const filteredKeywords = keywords.filter(k => card.keywordIds.includes(k.id))

    const onKeywordClick = (name, slug) => {
        setKeywordName(name)
        setKeyword(slug)
    }

    const keywordItems = filteredKeywords.length !== 0 
        ? filteredKeywords.map((k, i) => (<><KeywordInfoContainer key={k.id} 
            onKeywordClick={onKeywordClick} 
            kwd={k} 
            style={{bottom: 80, left: 0}}/>{ i !== filteredKeywords.length - 1 && ', '}</>))
        : '-'
        
    return <>{keywordItems}</>
}

export default CardsRowKeywords