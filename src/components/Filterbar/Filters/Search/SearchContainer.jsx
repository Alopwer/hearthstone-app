import React, { useState } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import {
    resetPage,
    setTextFilter
} from '../../../../redux/requestReducer';

const SearchContainer = (props) => {
    const [search, setSearch] = useState('')

    const onChangeSearch = e => {
        setSearch(e.target.value)
    }

    const onHandleSearch = () => {
        props.resetPage()
        props.setTextFilter(search)
    }
    return <Search search={search} onChangeSearch={onChangeSearch} onHandleSearch={onHandleSearch}/>
}

export default connect(null, {setTextFilter, resetPage})(SearchContainer)