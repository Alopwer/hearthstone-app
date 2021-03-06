import React from 'react'
import Select, { components } from 'react-select'
import CustomScroll from 'react-custom-scroll'
import '../../node_modules/react-custom-scroll/dist/customScroll.css'
import '../components/Filterbar/Scroll.scss'
import withSizes from 'react-sizes'

const customStyles = icon => ({
    container: (provided) => ({
        ...provided,
        fontFamily: 'belwe'
    }),
    control: (provided, state) => ({
        ...provided,
        background: state.selectProps.menuIsOpen ? '#FFFF94' : '#C3B189',
        borderRadius: '20px',
        boxShadow: 'none',
        flexWrap: 'no-wrap',
        cursor: 'pointer',
        minHeight: '28px',
        border: `3px solid ${state.selectProps.menuIsOpen ? 'white' : '#F7F3B5'}`,
        ':hover': {
            border: '3px solid white',
            background: '#FFFF94',
        }
    }),
    dropdownIndicator: (provided, state) => {
        return {
            ...provided,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
            color: '#614326',
            padding: '0px 3px',
            ':hover': {}
        }
    },
    groupHeading: provided => {
        return {
            ...provided,
            fontSize: '1rem'
        }
    },
    indicatorSeparator: () => ({}),
    menu: (provided) => ({
        ...provided,
        width: '200px',
        maxHeight: '300px',
        background: '#3D362F',
        borderRadius: '3px'
    }),
    menuList: (provided) => ({
        ...provided,
        maxHeight: '300px'
    }),
    option : (provided, state) => ({
        color: state.isSelected ? '#FCD144' : 'white', 
        background: state.isFocused && '#12100E' || state.isSelected && 'transparent',
        cursor: 'pointer',
        padding: '10px 8px 10px 15px',

    }),
    singleValue: () => ({
        color: '#614326',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: !icon && '20px',
        textAlign: 'center'
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0px',
        flexWrap: 'no-wrap',
        minHeight: '30px',
    })
})

const withCustomSelect = (props) => {
    const withScrollbar = props => <CustomScroll heightRelativeToParent='100%'>{props.children}</CustomScroll>
    const valueViewChecker = componentProps => {
        const selectValue = props.hasOwnProperty('shrinkMd') 
            ? props.isLarge && <span>{componentProps.children}</span> 
            : <span>{componentProps.children}</span>
        return <components.SingleValue {...componentProps}>
            {props.icon}{selectValue}
        </components.SingleValue>
    }


    return <Select styles={customStyles(props.icon)}
        options={props.options}
        defaultValue={{...props.defaultValue}}
        value={props.value && {...props.value}}
        onChange={props.onChangeValue}
        isSearchable={false}
        onKeyDown={e => e.preventDefault()}
        components={{
            MenuList: withScrollbar,
            SingleValue: valueViewChecker
        }}
    />
}

const mapSizesToProps = ({ width }) => ({
    isLarge: width > 1300,
    isSmall: width > 991,
})

export default withSizes(mapSizesToProps)(withCustomSelect)