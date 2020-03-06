import React from 'react';
import { connect } from 'react-redux';
import { setClass, resetPage } from '../../../../redux/requestReducer';
import Classes from './Classes';

const ClassesContainer = (props) => {
    const classes = props.classes.map(c => (
        <option value={c.name} key={c.id}>{ c.name }</option>
    ))

    const onChangeClass = e => {
        props.resetPage()
        const classValue =
            e.target.value === 'All Classes' ? 'all' : e.target.value;
        props.setClass(classValue);
    };

    return <Classes classes={classes} class={props.class} onChangeClass={onChangeClass}/>
}

const mapStateToProps = (state) => ({
    classes: state.appReducer.classes,
    class: state.requestReducer.options.class
})

export default connect(mapStateToProps, { setClass, resetPage })(ClassesContainer)
