import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CardsRowKeywords from './CardsRowKeywords';
import CardsRowMinionType from './CardsRowMinionType';
import s from '../CardsTable.module.scss';

const CardsRow = ({ metadata, card, setKeyword, setMinionType, setKeywordName, setMinionTypeName, ...props }) => {
    const [isHovered, toggleHovered] = useState(false)
    const [pos, setPos] = useState(null)
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
    const handleFullImgPos = (e) => {
        const q = e.currentTarget.getBoundingClientRect()
        setPos(e.currentTarget.getBoundingClientRect())
    }

    return <tr className={s['card-row']}>
        <td className={s['card-row__card']}>
            <div className={s['card-img']} onMouseEnter={(e) => {
                handleFullImgPos(e)
                toggleHovered(true)
                }} onMouseLeave={(e) => {
                    handleFullImgPos(e)
                    toggleHovered(false)
                    }}>
                <NavLink 
                    to={`/cards/${card.id}`} 
                    className={s['card-img__link']}
                >
                    {card.name}
                </NavLink>
                <div className={s['card-img__mask']}></div>
                <div className={s['card-img__img']} style={{ backgroundImage: `url(${card.cropImage})` }}></div>
            </div>
            { isHovered && <div 
                className={s['card-img_full']} 
                style={{backgroundImage: `url(${card.image})`,
                left: pos.left + pos.width + 20,
                top: pos.top - 140}}>
            </div> }
        </td>
        {
            props.width > 600 && 
            <td className={s['class']}>
                {classes.find(cl => cl.id === card.classId).name}
            </td>
        }
        <td className={s['sortable']}>
            <div className={`${s['mana']} ${(card.manaCost || card.manaCost == 0) && 'textShadow'}`} style={{backgroundImage: `${!card.manaCost && card.manaCost !== 0 && 'none'}`}}> 
                {card.manaCost}
            </div>
        </td>
        <td className={s['sortable']}>
            <div className={`${s['attack']} ${(card.attack || card.attack == 0) && 'textShadow'}`} style={{backgroundImage: `${!card.attack && card.attack !== 0 && 'none'}`}}>
                {card.attack || '-'}
            </div>
        </td>
        <td className={s['sortable']}>
            <div className={`${s['health']} ${(card.health || card.health == 0) && 'textShadow'}`} style={{backgroundImage: `${!card.health && card.health !== 0 && 'none'}`}}>
                {card.health || '-'}
            </div>
        </td>
        {
            props.width > 786 && 
            <td>
                {types.find(t => t.id === card.cardTypeId).name}
            </td>
        }
        {
            props.width > 914 && 
            <td>
                {rarities.find(r => r.id === card.rarityId).name}
            </td>
        }
        {
            props.width > 1040 && 
            <td>
                {minionTypeItems || '-'}
            </td>
        }
        { 
            props.width > 1200 && 
            <td>
                {keywordItems || '-'}
            </td> 
        }
    </tr>
}

export default CardsRow