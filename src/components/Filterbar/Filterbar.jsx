import React from 'react';

const Filterbar = (props) => {
    const sets = props.sets.map(s => (
        <option value={s.name} key={s.id}>{ s.name }</option>
    ))

    const classes = props.classes.map(c => (
        <option value={c.name} key={c.id}>{ c.name }</option>
    ))

    const manaCost = []
    for (let i = 0; i <= 10; i++) {
        manaCost.push(
            <option key={i} value={i}>{ i }</option>
        )
    }
    manaCost.push(<option key={11} value={'all'}>All cost</option>)
    // const manaCost = []
    
    // for (let i = 0; i <= 10; i++) {
    //     manaCost.push(
    //         <button key={i} value={i}>{ i }</button>
    //     )
    // }

    return (
        <div>
            <div>
                <select value={props.gameMode || props.set} onChange={(e) => props.handleAction(e, 'set')}>
                    <option value="Standard">Standard cards</option>
                    <option value="Wild">All cards</option>
                    <option value="Arena">Arena cards</option>
                    { sets }
                </select>
                <select value={props.class} onChange={(e) => props.handleAction(e, 'class')}>
                    { classes }
                </select>
                <select value={props.manaCost} onChange={(e) => props.handleAction(e, 'manaCostSelect')}>
                    { manaCost }
                </select>
                {/* <div onClick={(e) => props.handleAction(e, 'manaCostButton')}>
                    { manaCost }
                </div> */}
                <input value={props.search} onChange={props.onChangeSearch}/>
                <button onClick={() => props.onHandleAction(null, 'search')}>Search</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Filterbar;