import React from 'react';
import { connect } from 'react-redux';
import {
    setActualSet,
    setGameMode
} from '../../../../redux/requestReducer';
import Sets from './Sets';

const SetsContainer = (props) => {
    const sets = props.sets.map(s => (
        <option value={s.name} key={s.id}>{ s.name }</option>
    ))

    const onChangeSet = e => {
        if (e.target.value === 'Arena') {
            props.setGameMode(e.target.value);
        } else {
            props.setActualSet(e.target.value);
        }
    };

    return <Sets sets={sets} set={props.set} gameMode={props.gameMode} onChangeSet={onChangeSet}/>
}

const mapStateToProps = (state) => ({
    sets: state.appReducer.metadata.sets,
    set: state.requestReducer.options.set,
    gameMode: state.requestReducer.options.gameMode
})

export default connect(mapStateToProps, { setGameMode, setActualSet })(SetsContainer)
