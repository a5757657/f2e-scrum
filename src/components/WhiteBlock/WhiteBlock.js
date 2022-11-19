import React from 'react'
import './WhiteBlock.scss'

const WhiteBlock = ({
  button,
  children
}) => {
  return (
    <div className='WhiteBlock'>
      <div className="textWrap">
        {children}
      </div>
      <div className="btnWrap">
        {button}
      </div>
    </div>
  )
}

export default WhiteBlock