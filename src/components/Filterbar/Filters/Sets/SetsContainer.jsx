import React from 'react'
import { connect } from 'react-redux'
import { setActualSet, setGameMode } from '../../../../redux/requestReducer'
import { setActualSetName } from '../../../../redux/staticInfoReducer'
import Sets from './Sets'

const SetsContainer = (props) => {
    let sets = [{
        value: 'Standard',
        label: 'Standard cards'
    },
    {
        value: 'Wild',
        label: 'All cards'
    },
    {
        value: 'Arena',
        label: 'Arena cards'
    },
    ...props.sets.map(s => ({value: s.slug, label: s.name}))]

    const onChangeSet = option => {
        const { label, value } = option
        if (value === 'Arena') {
            props.setGameMode(value)
        } else {
            props.setActualSet(value)
            props.setActualSetName(label)
        }
    };

    return <Sets sets={sets} 
        set={props.set} 
        gameMode={props.gameMode}
        onChangeSet={onChangeSet}/>
}

const mapStateToProps = (state) => ({
    sets: state.appReducer.metadata.sets,
    set: state.requestReducer.options.set,
    gameMode: state.requestReducer.options.gameMode
})

export default connect(mapStateToProps, { setGameMode, setActualSet, setActualSetName })(SetsContainer)
