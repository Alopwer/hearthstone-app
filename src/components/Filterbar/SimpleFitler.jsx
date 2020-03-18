import React from 'react';

const SimpleFilter = (props) => {
    return (
        <select value={props.value} onChange={(e) => {
            props.setValue(e.target.value)
            const index = e.nativeEvent.target.selectedIndex;
            const name = e.nativeEvent.target[index].text
            props.setName && props.setName(name)
        }}>
            { props.renderItems }
        </select>
    )
}

export default SimpleFilter;