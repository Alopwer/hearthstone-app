import React from 'react'
import { NavLink } from 'react-router-dom';
import CardsRowKeywords from './CardsRowKeywords';
import CardsRowMinionType from './CardsRowMinionType';

const CardsRow = ({ metadata, card, setKeyword, setMinionType, setKeywordName, setMinionTypeName }) => {
    const { classes, types, rarities, minionTypes, keywords } = metadata
    const keywordItems = card.keywordIds 
        && <CardsRowKeywords card={card} 
            keywords={keywords} 
            setKeywordName={setKeywordName} 
            setKeyword={setKeyword}
        />
    
    const minionTypeItems = card.minionTypeId 
        && <CardsRowMinionType card={card}
            minionTypes={minionTypes}
            setMinionType={setMinionType}
            setMinionTypeName={setMinionTypeName}
        />

    return <tr>
        <td style={{ backgroundImage: `url(${card.cropImage})` }}>
            <NavLink to={`/cards/${card.id}`}>{card.name}</NavLink>
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