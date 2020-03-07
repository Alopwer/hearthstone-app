import React, { useState, useEffect } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import {
    setTextFilter
} from '../../../../redux/requestReducer';

const SearchContainer = (props) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        setSearch(props.textFilter)
    }, [props.textFilter])

    const onChangeSearch = e => {
        setSearch(e.target.value)
    }

    const onHandleSearch = () => {
        props.setTextFilter(search)
    }
    return <Search search={search} onChangeSearch={onChangeSearch} onHandleSearch={onHandleSearch}/>
}

const mapStateToProps = (state) => ({ textFilter: state.requestReducer.options.textFilter })

export default connect(mapStateToProps, {setTextFilter})(SearchContainer)