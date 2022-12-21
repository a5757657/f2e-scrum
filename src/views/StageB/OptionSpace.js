import React from 'react'
import "./OptionSpace.scss"

const OptionSpace = (props) => {
    const { text } = props
    return (
        <div className='OptionSpace'>{text}</div>
    )
}

export default OptionSpace