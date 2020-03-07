import React from 'react';

const ManaCost = (props) => {
    return (
        <>
            {/* <select value={props.manaCost || 'all'} onChange={props.onChangeManaCostSelect}>
                { props.manaCostItems }
            </select> */}
            <div onClick={props.onChangeManaCostButton}>
                { props.manaCostItems }
            </div>
        </>
    )
}

export default ManaCost;