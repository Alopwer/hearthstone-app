import React from 'react'
import s from './NoCards.module.scss'

const NoCards = () => {
    return <div className={s['nocards']}>
        <div>
            <h3>Nothing was found</h3>
            <p>Try changing filters for better results</p>
        </div>
    </div>
}

export default NoCards