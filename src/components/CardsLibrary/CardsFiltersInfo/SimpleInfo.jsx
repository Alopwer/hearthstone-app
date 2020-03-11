import React from 'react';

const SimpleInfo = props => {
    return <div onClick={() => props.resetValue('')}>
        {props.valueInfo}
    </div>
}

export default SimpleInfo