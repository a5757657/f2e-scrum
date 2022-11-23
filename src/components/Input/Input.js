import React from 'react'
import './Input.scss'

const Input = (props) => {
    const { placeholder, onChange } = props
    return (
        <input type="text" placeholder={placeholder} onChange={onChange} />
    )
}

export default Input