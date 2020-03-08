import React from 'react';

const SimpleInfo = props => {
    return <div onClick={() => props.setValue('')}>
        {props.valueInfo}
    </div>
}

export default SimpleInfo