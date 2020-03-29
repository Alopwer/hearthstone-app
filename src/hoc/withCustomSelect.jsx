import React from 'react'
import Select, { components } from 'react-select'
import CustomScroll from 'react-custom-scroll'
import '../../node_modules/react-custom-scroll/dist/customScroll.css'
import withSizes from 'react-sizes'

const withCustomSelect = props => {
    
    const customStyles = {
        // container: (provided) => ({...provided}),
        control: (provided, state) => ({
            ...provided,
            background: '#C3B189',
            border: 'none',
            borderRadius: '20px',
            boxShadow: 'none',
            flexWrap: 'no-wrap',
            cursor: 'pointer',
            minHeight: '28px',
            ':hover': {
                background: '#FFFF94'
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
        // // group
        groupHeading: provided => {
            return {
                ...provided,
                fontSize: '1rem'
            }
        },
        // // indicatorsContainer: (provided) => ({
        // //     ...provided,
        // // }),
        indicatorSeparator: () => ({}),
        menu: (provided) => ({
            ...provided,
            maxHeight: '300px',
            background: '#3D362F',
            borderRadius: '3px',
            minWidth: '200px'
        }),
        menuList: (provided) => ({...provided}),
        option : (provided, state) => ({
            ...provided, 
            color: state.isSelected ? '#FCD144' : 'white', 
            background: state.isFocused && '#12100E' || state.isSelected && 'transparent',
            cursor: 'pointer',
            padding: '10px 8px 10px 15px'
        }),
        singleValue: () => ({
            color: '#614326',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0px',
            flexWrap: 'no-wrap'
        })
    }
    
    const withScrollbar = props => <CustomScroll heightRelativeToParent="100%" {...props} />
    const valueViewChecker = componentProps => <components.SingleValue {...componentProps}>
            {props.icon}{props.isLarge && <span>{componentProps.children}</span>}
        </components.SingleValue>

    return <Select styles={customStyles}
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
    isLarge: width > 1200,
})

export default withSizes(mapSizesToProps)(withCustomSelect)