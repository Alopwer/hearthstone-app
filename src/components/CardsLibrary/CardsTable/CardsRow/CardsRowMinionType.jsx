import React from 'react'

const CardsRowMinionType = ({ card, minionTypes, setMinionType, setMinionTypeName }) => {
    const correctMinionType = minionTypes.find(m => m.id === card.minionTypeId)
    const minionTypeItems = <span onClick={() => {
            setMinionTypeName(correctMinionType.name)
            setMinionType(correctMinionType.slug)
        }}>{correctMinionType.name}</span> 
        || '-'

    return <>{minionTypeItems}</>
}

export default CardsRowMinionType