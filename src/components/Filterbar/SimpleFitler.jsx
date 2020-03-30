import withCustomSelect from '../../hoc/withCustomSelect'

const SimpleFilter = (props) => {
    const onSelectValue = (e) => {
        props.setValue(e.value)
        props.setName && props.setName(e.label)
    }

    return withCustomSelect({
        options: props.renderItems,
        value: props.renderItems.find(v => v.value === props.value),
        onChangeValue: onSelectValue,
        icon: props.icon
    })
}

export default SimpleFilter;