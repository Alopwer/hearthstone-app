import React from 'react';

const Sets = (props) => {
    return (
        <select value={props.gameMode || props.set} onChange={props.onChangeSet}>
            <option value="Standard">Standard cards</option>
            <option value="Wild">All cards</option>
            <option value="Arena">Arena cards</option>
            { props.sets }
        </select>
    )
}

export default Sets
