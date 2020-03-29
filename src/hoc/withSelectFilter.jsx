import React from 'react';

const withSelectFilter = props => SimpleFilter => {
    const renderItems = []
    if (props.name) {
        // renderItems.push(<option key={100} value={''}>All {props.name}</option>)
        renderItems.push({
            label: `All ${props.name}`,
            value: ''
        })
    }
    if (props.options) {
        for (const option of props.options) {
            // renderItems.push(
            //     <option key={option.id} value={option.slug}>{ option.name }</option>
            // )
            renderItems.push({
                label: option.name,
                value: option.slug
            })
        }
    } else {
        let i;
        if (props.name === 'Attack') {
            i = 0
        } else {
            i = 1
        }
        for (i; i <= 10; i++) {
            // renderItems.push(
            //     <option key={i} value={i}>{ i }</option>
            // )
            renderItems.push({
                label: i,
                value: i
            })
        }
    }
    
    return (
        <SimpleFilter {...props} renderItems={renderItems}/>
    )
}

export default withSelectFilter;