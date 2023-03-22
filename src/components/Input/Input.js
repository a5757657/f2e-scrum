import React from 'react'
import './Input.scss'

const Input = (props) => {
    const { placeholder, onChange, value } = props
    return (
        <input value={value} type="text" placeholder={placeholder} onChange={onChange} />
    )
}

export default Input