import React from 'react';

const withSelectFilter = props => Component => {
    const renderItems = []
    if (props.name) {
        renderItems.push(<option key={100} value={''}>All {props.name}</option>)
    }
    if (props.options) {
        for (const option of props.options) {
            renderItems.push(
                <option key={option.id} value={option.slug}>{ option.name }</option>
            )
        }
    } else {
        let i;
        if (props.name === 'Attack') {
            i = 1
        } else {
            i = 0
        }
        for (i; i <= 10; i++) {
            renderItems.push(
                <option key={i} value={i}>{ i }</option>
            )
        }
    }

    return (
        <Component {...props} renderItems={renderItems}/>
    )
}

export default withSelectFilter;