import React from 'react'
import preloader from '../../assets/isFetching.svg';
import s from './common.module.scss';

const Preloader = () => {
    return <div className={s['preloader']}>
        <img src={preloader}/>
    </div>
}

export default Preloader