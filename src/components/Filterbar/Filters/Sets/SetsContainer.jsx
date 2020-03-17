import React from 'react'
import { connect } from 'react-redux'
import { setActualSet, setGameMode } from '../../../../redux/requestReducer'
import { setActualSetName } from '../../../../redux/staticInfoReducer'
import Sets from './Sets'

const SetsContainer = (props) => {
    const sets = props.sets.map(s => (
        <option value={s.slug} key={s.id}>{ s.name }</option>
    ))

    const onChangeSet = e => {
        const value = e.target.value
        if (value === 'Arena') {
            props.setGameMode(value)
        } else {
            props.setActualSet(value)
            const set = props.sets.find(s => s.slug === value) || value
            props.setActualSetName(set.name || set)
        }
    };

    return <Sets sets={sets} set={props.set} gameMode={props.gameMode} onChangeSet={onChangeSet}/>
}

const mapStateToProps = (state) => ({
    sets: state.appReducer.metadata.sets,
    set: state.requestReducer.options.set,
    gameMode: state.requestReducer.options.gameMode
})

export default connect(mapStateToProps, { setGameMode, setActualSet, setActualSetName })(SetsContainer)
