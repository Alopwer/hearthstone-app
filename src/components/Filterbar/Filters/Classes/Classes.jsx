import React from 'react';

const Classes = (props) => {
    return (
        <select value={props.class} onChange={props.onChangeClass}>
            { props.classes }
        </select>
    )
}

export default Classes;