import React from 'react'
import s from '../../Filterbar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdClear } from 'react-icons/md'

const Search = (props) => {
    return <div className={s['filterbar-top__element']}>
        <div className={s[`filterbar-search${props.search && '_active'}`]}>
            <div onClick={props.onHandleSearch}>
                <AiOutlineSearch style={{
                    border: 'none', 
                    background: 'transparent', 
                    marginLeft: '2px', 
                    paddingTop: '5px',
                    cursor: 'pointer'
                }}/>
            </div>
            <input className={s['filterbar-search__search']} 
                value={props.search} 
                onChange={props.onChangeSearch} 
                placeholder='Search'
                onKeyPress={(e) => e.key === 'Enter' && props.onHandleSearch()}
            />
            {
                props.search &&
                <div onClick={props.onClearInput} style={{position: 'absolute', right: '0'}}>
                    <MdClear style={{
                        border: 'none', 
                        background: 'transparent',
                        paddingTop: '5px',
                        color: 'red',
                        cursor: 'pointer'
                    }}/>
                </div>
            }
        </div>
    </div>
}

export default Search