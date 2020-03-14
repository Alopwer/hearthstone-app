import React from 'react'

const CardsRow = ({ metadata, card, setKeyword, setMinionType }) => {
    const { classes, types, rarities, minionTypes, keywords } = metadata
    const keywordItems = card.keywordIds 
        && keywords.filter(k => card.keywordIds.includes(k.id))
            .map(k => (<span onClick={() => setKeyword(k.slug)}>{k.name}</span>)) 
        || '-'
    const correctMinionType = minionTypes.find(m => m.id === card.minionTypeId)
    const minionTypeItems = card.minionTypeId 
        && <span onClick={() => setMinionType(correctMinionType.name)}>{correctMinionType.name}</span> 
        || '-'

    return <tr>
        <td style={{ backgroundImage: `url(${card.cropImage})` }}>
            {card.name}
        </td>
        <td>
            {classes.find(cl => cl.id === card.classId).name}
        </td>
        <td>
            {card.manaCost}
        </td>
        <td>
            {card.attack || '-'}
        </td>
        <td>
            {card.health || '-'}
        </td>
        <td>
            {types.find(t => t.id === card.cardTypeId).name}
        </td>
        <td>
            {rarities.find(r => r.id === card.rarityId).name}
        </td>
        <td>
            {minionTypeItems}
        </td>
        <td>
            {keywordItems}
        </td>
    </tr>
}

export default CardsRow