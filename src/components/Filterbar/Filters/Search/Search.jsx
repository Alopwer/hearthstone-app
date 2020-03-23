import React from 'react'
import s from '../../Filterbar.module.scss'

const Search = (props) => {
    return <div className={s['filterbar-top__element']}>
        <input value={props.search} onChange={props.onChangeSearch} />
        <button onClick={props.onHandleSearch}>Search</button>
    </div>
}

export default Search