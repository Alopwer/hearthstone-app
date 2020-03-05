import React from 'react';

const Filterbar = (props) => {
    const sets = props.sets.map(s => (
        <option value={s.name} key={s.id}>{ s.name }</option>
    ))

    return (
        <div>
            <div>
                <select value={props.set} onChange={props.changeSet}>
                    <option value="standard">Standard cards</option>
                    <option value="wild">All cards</option>
                    <option value="arena">Arena cards</option>
                    { sets }
                </select>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Filterbar;