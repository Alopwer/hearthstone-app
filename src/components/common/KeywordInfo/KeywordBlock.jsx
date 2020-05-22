import React from 'react'
import KeywordInfoContainer from './KeywordInfoContainer'
import s from './KeywordInfo.module.scss'

const KeywordBlock = (props) => {
    return props.keywordList ?
        <div className={s['keyword_modal']}>
            <p>Learn more:</p>
            {
                props.keywordList.map((k, i) => <>
                    <KeywordInfoContainer kwd={k} style={props.style}/>
                    { i !== props.keywordList.length - 1 && ', '}
                </>)
            }
        </div> : false
}

export default KeywordBlock