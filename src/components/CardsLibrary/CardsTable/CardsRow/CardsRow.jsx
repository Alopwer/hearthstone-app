import React from 'react'
import CardsRowKeywords from './CardsRowKeywords/CardsRowKeywords';
import CardsRowMinionType from './CardsRowMinionType';
import s from '../CardsTable.module.scss';
import CardsRowSortable from './CardsRowSortable';
import CardsRowImgContainer from './CardsRowImgContainer';

const CardsRow = ({ metadata, card, setKeyword, setMinionType, setKeywordName, setMinionTypeName, ...props }) => {
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
        
    return <tr className={s['card-row']}>
        <CardsRowImgContainer id={card.id} 
            name={card.name} 
            cropImg={card.cropImage}
            image={card.image}
        />
        { props.isXSmall && <td>{ classes.find(cl => cl.id === card.classId).name }</td> }
        <CardsRowSortable className={'mana'} property={card.manaCost}/>
        <CardsRowSortable className={'attack'} property={card.attack}/>
        <CardsRowSortable className={'health'} property={card.health}/>
        { props.isSmall && <td>{ types.find(t => t.id === card.cardTypeId).name } </td> }
        { props.isMedium && <td>{ rarities.find(r => r.id === card.rarityId).name }</td> }
        { props.isLarge && <td className={s['filterable']}>{ minionTypeItems || '-' }</td> }
        { props.isXLarge && <td className={s['filterable']}>{ keywordItems || '-' }</td> }
    </tr>
}

export default CardsRow