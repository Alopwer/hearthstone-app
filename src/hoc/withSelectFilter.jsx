import React from 'react';

const withSelectFilter = props => Component => {
    const renderItems = []
    const keyValue = props.options ? props.options.length : 11
    if (props.name) {
        renderItems.push(<option key={keyValue} value={''}>All {props.name}</option>)
    }
    if (props.options) {
        for (const option of props.options) {
            renderItems.push(
                <option key={option.id} value={option.slug}>{ option.name }</option>
            )
        }
    } else {
        for (let i = 0; i <= 10; i++) {
            renderItems.push(
                <option key={i} value={i}>{ i }</option>
            )
        }
    }
// debugger
    return (
        <Component {...props} renderItems={renderItems}/>
    )
}

export default withSelectFilter;