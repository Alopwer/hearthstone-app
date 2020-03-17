import React from 'react';

const ModalCard = props => {
    return <div>
        { props.relativeCardsIds[0] && <span onClick={() => props.onRequestCard(false)}>prev</span> }
         <div>
            <img src={props.cardInfo.image} />
            <div>
                <p>{props.cardInfo.name}</p>
                <p>{props.cardInfo.flavorText}</p>
                <p dangerouslySetInnerHTML={{__html: props.cardInfo.text}}></p>
                <ul>
                    <li>Type: {props.metadata.types.find(t => t.id === props.cardInfo.cardTypeId).name}</li>
                    <li>Rarity: {props.metadata.rarities.find(r => r.id === props.cardInfo.rarityId).name}</li>
                    <li>Set: {props.metadata.sets.find(s => s.id === props.cardInfo.cardSetId) && props.metadata.sets.find(s => s.id === props.cardInfo.cardSetId).name}</li>
                    <li>Class: {props.metadata.classes.find(c => c.id === props.cardInfo.classId).name}</li>
                    <li>Cost to craft: {props.metadata.rarities.find(r => r.id === props.cardInfo.rarityId).craftingCost}</li>
                    <li>Disenchanting Yield: {props.metadata.rarities.find(r => r.id === props.cardInfo.rarityId).dustValue}</li>
                    <li>Artist: {props.cardInfo.artistName}</li>
                    <li>{props.cardInfo.collectible ? 'Collectible' : 'Not Collectible'}</li>
                </ul>
            </div>
        </div>
        { props.relativeCardsIds[1] && <span onClick={() => props.onRequestCard(true)}>next</span> }
    </div>
}

export default ModalCard;