import React, { useState } from 'react';
import { connect } from 'react-redux';
import Filterbar from './Filterbar';
import {
    setActualSet,
    makeRequestDefault,
    setGameMode,
    setClass,
    setManaCost,
    removeManaCost,
    resetPage,
    setTextFilter
} from '../../redux/requestReducer';

const FilterbarContainer = props => {
    const [search, setSearch] = useState('')

    const onHandleAction = (e, action) => {
        props.resetPage()
        switch (action) {
            case 'set':
                onChangeSet(e)
                break;
            case 'class':
                onChangeClass(e)
                break;
            case 'manaCost':
                onChangeManaCost(e)
                break;
            case 'search':
                onHandleSearch()
                break;
        }
    }

    const onChangeSet = e => {
        if (e.target.value === 'Arena') {
            props.setGameMode(e.target.value);
        } else {
            props.setActualSet(e.target.value);
        }
    };

    const onChangeClass = e => {
        const classValue =
            e.target.value === 'All Classes' ? 'all' : e.target.value;
        props.setClass(classValue);
    };

    const onChangeManaCost = e => {
        if (props.manaCost.every(m => m !== e.target.value)) {
            props.setManaCost(e.target.value)
        } else {
            props.removeManaCost(e.target.value)
        }
    };

    const onChangeSearch = e => {
        setSearch(e.target.value)
    }

    const onHandleSearch = () => {
        props.setTextFilter(search)
    }

    return (
        <Filterbar
            handleAction={onHandleAction}
            search={search}
            onChangeSearch={onChangeSearch}
            {...props}
        />
    );
};

const mapStateToProps = state => ({
    sets: state.appReducer.sets,
    classes: state.appReducer.classes,
    set: state.requestReducer.options.set,
    class: state.requestReducer.options.class,
    gameMode: state.requestReducer.options.gameMode,
    manaCost: state.requestReducer.options.manaCost
});

export default connect(mapStateToProps, {
    makeRequestDefault,
    setActualSet,
    setGameMode,
    setClass,
    setManaCost,
    removeManaCost,
    resetPage,
    setTextFilter
})(FilterbarContainer);
