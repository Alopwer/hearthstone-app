import React from 'react';
import SimpleFilter from '../components/Filterbar/SimpleFitler';

const withSelectFilter =  (value, setValue, name, options, setName = null, icon) => {
    const renderItems = []
    if (name) {
        renderItems.push({
            label: `All ${name}`,
            value: ''
        })
    }
    if (options) {
        for (const option of options) {
            renderItems.push({
                label: option.name,
                value: option.slug
            })
        }
    } else {
        let i;
        if (name === 'Attack') {
            i = 0
        } else {
            i = 1
        }
        for (i; i <= 10; i++) {
            renderItems.push({
                label: i,
                value: i
            })
        }
    }

    return <SimpleFilter renderItems={renderItems}
            value={value}
            setValue={setValue}
            setName={setName} 
            icon={icon}/>
}

export default withSelectFilter;