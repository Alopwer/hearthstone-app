import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorBoundaryContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            isOpened: true
        }
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    on = () => {
        this.setState({
            hasError: false,
            isOpened: false
        })
    }

    render() {
        return (this.state.hasError || this.props.err) && this.state.isOpened ? <ErrorBoundary onClose={this.on}/> : this.props.children
    }
}