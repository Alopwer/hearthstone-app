import React from 'react';

const SimpleFilter = (props) => {
    return (
        <select value={props.value} onChange={(e) => {debugger;props.setValue(e.target.value)}}>
            { props.renderItems }
        </select>
    )
}

export default SimpleFilter;