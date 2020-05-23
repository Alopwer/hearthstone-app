import React from 'react'
import s from './ErrorBoundary.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

const ErrorBoundary = props => (
    <div className={s['error']} onClick={props.onClose}>
        <p>Something wrong has occured! Try to reload the page.</p>
        <div className={s['error__close']} >
            <AiOutlineClose />
        </div>
    </div>
)

export default ErrorBoundary