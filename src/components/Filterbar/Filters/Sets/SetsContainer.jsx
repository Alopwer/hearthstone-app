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
    {
        label: 'Standard cards',
        options: props.sets.filter(s => props.standardSetGroups.includes(s.slug)).map(s => ({value: s.slug, label: s.name}))
    },
    {
        label: 'Wild sets',
        options: props.sets.filter(s => !props.standardSetGroups.includes(s.slug)).map(s => ({value: s.slug, label: s.name}))
    }]

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
    standardSetGroups: state.appReducer.metadata.setGroups[6].cardSets,
    sets: state.appReducer.metadata.sets,
    set: state.requestReducer.options.set,
    gameMode: state.requestReducer.options.gameMode
})

export default connect(mapStateToProps, { setGameMode, setActualSet, setActualSetName })(SetsContainer)
