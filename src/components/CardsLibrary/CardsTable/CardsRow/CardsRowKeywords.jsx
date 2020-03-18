import React from 'react'

const CardsRowKeywords = ({ keywords, card, setKeyword, setKeywordName }) => {
    const filteredKeywords = keywords.filter(k => card.keywordIds.includes(k.id))
    const keywordItems = filteredKeywords.map((k, i) => (<span key={k.id} onClick={() => {
        setKeywordName(k.name)
        setKeyword(k.slug)
    }}>{k.name}{i != filteredKeywords.length - 1 && ', '}</span>))
    || '-'

    return <>{keywordItems}</>
}

export default CardsRowKeywords