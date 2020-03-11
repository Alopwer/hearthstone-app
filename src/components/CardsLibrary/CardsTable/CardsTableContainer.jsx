import React from 'react';
import CardsTable from './CardsTable';
import { connect } from 'react-redux';

const CardsTableContainer = props => {
    const {classes, types, rarities, minionTypes, keywords} = props.metadata
    const cardsRows = props.cards.map(c => (<tr key={c.id}>
        <td style={{backgroundImage: `url(${c.cropImage})`}}>
            {c.name}
        </td>
        <td>
            {classes.find(cl => cl.id === c.classId).name}
        </td>
        <td>
            {c.manaCost}
        </td>
        <td>
            {c.attack || '-'}
        </td>
        <td>
            {c.health || '-'}
        </td>
        <td>
            {types.find(t => t.id === c.cardTypeId).name}
        </td>
        <td>
            {rarities.find(r => r.id === c.rarityId).name}
        </td>
        <td>
            {c.minionTypeId && minionTypes.find(m => m.id === c.minionTypeId).name || '-'}
        </td>
        <td>
            {c.keywordIds && keywords.filter(k => c.keywordIds.includes(k.id)).map(k => k.name).join(', ') || '-'}
        </td>
    </tr>))

    return <CardsTable cardsItems={cardsRows}/>
}

const mapStateToProps = state => ({
    cards: state.cardsReducer.cards,
    metadata: state.appReducer.metadata
});

export default connect(mapStateToProps)(CardsTableContainer)