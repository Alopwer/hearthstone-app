import React from 'react'
import Select, { components } from 'react-select'
import CustomScroll from 'react-custom-scroll'
import '../../node_modules/react-custom-scroll/dist/customScroll.css'
import withSizes from 'react-sizes'

const withCustomSelect = props => {
    
    const customStyles = {
        // clearIndicator
        container: (provided) => ({...provided, cursor: 'pointer'}),
        control: (provided, state) => ({
            ...provided,
            background: '#C3B189',
            borderRadius: '20px',
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            ':hover': {
                background: '#FFFF94',
                border: 'none'
            }
        }),
        dropdownIndicator: (provided, state) => {
            // debugger
            return {
                ...provided,
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
                color: '#614326',
                ':hover': {}
            }
        },
        // group
        // groupHeading
        // indicatorsContainer
        indicatorSeparator: () => {},
        // input: (provided, state) => {
        //     debugger
        //     return {
        //         // ...provided,
        //         display: `${props.textShouldShrink && 'none'}`
        //     }
        // },
        // loadingIndicator
        // loadingMessage
        menu: (provided) => ({
            ...provided, 
            height: '300px', 
            background: '#3D362F',
            borderRadius: '3px',
            minWidth: '200px'
        }),
        // menuList: (provided, state) => ({
        //     ...provided, 
        //     background: '#3D362F',
        //     borderRadius: '50px',
        //     maxHeight: '300px'
        // }),
        // menuPortal
        // multiValue
        // multiValueLabel
        // multiValueRemove
        // noOptionsMessage
        option : (provided, state) => ({
            ...provided, 
            color: state.isSelected ? '#FCD144' : 'white', 
            background: state.isFocused && '#12100E' || state.isSelected && 'transparent',
            cursor: 'pointer'
        }),
        // placeholder
        singleValue: () => ({
            color: '#614326',
            cursor: 'pointer'
        }),
        valueContainer: (provided) => ({
            ...provided,
            display: `${props.textShouldShrink && 'none'}`
        })
    }
    
    const withScrollbar = props => <CustomScroll heightRelativeToParent="100%" {...props} />
    const inputChecker = props => !props.textShouldShrink ? <components.Input {...props}/> : null

    return <Select styles={customStyles}
        options={props.options}
        defaultValue={{ value : props.defaultValue.value, label: props.defaultValue.label}}
        onChange={props.onChangeValue}
        isSearchable={false}
        components={{
            MenuList: withScrollbar,
            Input: inputChecker
        }}
    />
}

const mapSizesToProps = ({ width }) => ({
    textShouldShrink: width < 1200,
})

export default withSizes(mapSizesToProps)(withCustomSelect)