import React from 'react';
import s from '../ModalCard.module.scss';

const ModalInfo = props => {
    const { type, rarity, set, classValue, cardInfo } = props

    return <div className={s['modal-info']}>
        <h3>{cardInfo.name}</h3>
        <p className={s['modal-info__flavorText']}>{cardInfo.flavorText}</p>
        <p className={s['modal-info__text']} dangerouslySetInnerHTML={{__html: cardInfo.text}}></p>
        <ul>
            { type && <li>Type: <span>{type.name}</span></li> }
            { rarity && <li>Rarity: <span>{rarity.name}</span></li> }
            { set && <li>Set: <span>{set.name}</span></li> }
            { classValue && <li>Class: <span>{classValue.name}</span></li> }
            { rarity.craftingCost.filter(Boolean).length !== 0 && <li>Cost to Craft: <span>{rarity.craftingCost.join(', ')}</span></li>}
            { rarity.dustValue.filter(Boolean).length !== 0 && <li>Disenchanting Yield: <span>{rarity.dustValue.join(', ')}</span></li> }
            { cardInfo.artistName && <li>Artist: <span>{cardInfo.artistName}</span></li> }
            { cardInfo.collectible && <li>Collectible</li> }
        </ul>
    </div>
}

export default ModalInfo;