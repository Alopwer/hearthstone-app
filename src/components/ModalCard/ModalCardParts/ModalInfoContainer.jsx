import React from 'react';
import { connect } from 'react-redux';
import ModalInfo from './ModalInfo';

const ModalInfoContainer = props => {
    const { types, rarities, sets, classes } = props.metadata
    const type = types.find(t => t.id === props.cardInfo.cardTypeId)
    const set = sets.find(s => s.id === props.cardInfo.cardSetId)
    const classValue = classes.find(c => c.id === props.cardInfo.classId)
    const rarity = rarities.find(r => r.id === props.cardInfo.rarityId)

    return <ModalInfo type={type}
        set={set}
        classValue={classValue}
        rarity={rarity}
        {...props}/>
}

const mapStateToProps = (state) => ({
    cardInfo: state.cardReducer.cardInfo,
    metadata: state.appReducer.metadata
})

export default connect(mapStateToProps)(ModalInfoContainer);