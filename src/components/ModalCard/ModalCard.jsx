import React from 'react';

const ModalCard = props => {
    const { types, rarities, sets, classes } = props.metadata
    const type = types.find(t => t.id === props.cardInfo.cardTypeId)
    const set = sets.find(s => s.id === props.cardInfo.cardSetId)
    const classValue = classes.find(c => c.id === props.cardInfo.classId)
    const rarity = rarities.find(r => r.id === props.cardInfo.rarityId)

    return <div>
        { props.relativeCardsIds[0] && <span onClick={() => props.onRequestCard(false)}>prev</span> }
         <div>
            <img src={props.cardInfo.image} />
            <div>
                <p>{props.cardInfo.name}</p>
                <p>{props.cardInfo.flavorText}</p>
                <p dangerouslySetInnerHTML={{__html: props.cardInfo.text}}></p>
                <ul>
                    <li>{type && `Type: ${type.name}`}</li>
                    <li>{rarity && `Rarity: ${rarity.name}`}</li>
                    <li>{set && `Set: ${set.name}`}</li>
                    <li>{classValue && `Class: ${classValue.name}`}</li>
                    <li>{rarity && `Cost to Craft: ${rarity.craftingCost}`}</li>
                    <li>{rarity && `Disenchanting Yield: ${rarity.dustValue}`}</li>
                    <li>Artist: {props.cardInfo.artistName}</li>
                    <li>{props.cardInfo.collectible ? 'Collectible' : 'Not Collectible'}</li>
                </ul>
            </div>
        </div>
        { props.relativeCardsIds[1] && <span onClick={() => props.onRequestCard(true)}>next</span> }
    </div>
}

export default ModalCard;