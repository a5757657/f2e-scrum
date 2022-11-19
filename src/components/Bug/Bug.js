import React from 'react'
import PropTypes from 'prop-types'
import './Bug.scss'

const Bug = ({
  position,
  color,
  smile,
  eyeColor,
  look,
}) => {
  const eyePositionX = () => {
      if (position.includes('left')) {
        return '17px'
      } else {
        return '5px'
      }
  }
  const eyePositionY = () => {
    if (position.includes('Top')) {
      return '17px'
    } else {
      return '5px'
    }
  }
  return (
    <div className="bugContainer">
      <div className={`Bug ${position}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="529" height="494" fill="none" viewBox="0 0 529 494">
          <path id='pathFill' fill={color} stroke="#0D0D0D" strokeWidth="2" d="M517.919 289.725c-.355 1.124-.71 2.235-1.064 3.335a1.395 1.395 0 0 0 .294 1.365l-64.058 167.984a29 29 0 0 1-26.281 18.655L30.849 492.206c-20.941.589-35.579-20.538-27.67-39.937l130.538-320.171a.989.989 0 0 0 .138-.254c18.318-49.42 39.65-82.064 70.642-102.393C235.503 9.114 276.333 1 333.881 1c117.161 0 225.882 123.278 184.038 288.725Z" />
        </svg>
      </div>
      <div className={`smile ${position}Smile`}>
        <svg className='leftEye' width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="31.842" cy="31.1579" r="30.1579" fill="white" stroke="#0D0D0D" strokeWidth="2" />
          {smile ?
            <path d="M11 35.5001C14.5 13.5001 47.5 7.50012 52.5 35.5001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            : <circle style={{ transform: `translate(${look ? eyePositionX() : '11px'}, ${look ? eyePositionY() : '11px'})` }} cx="20.587" cy="20.587" r="20.587" fill={eyeColor} />
          }
        </svg>
        <svg className='rightEye' width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="31.1579" cy="31.1579" r="30.1579" fill="white" stroke="#0D0D0D" stroke-width="2" />
          {smile ?
            <path d="M11 35.5001C14.5 13.5001 47.5 7.50012 52.5 35.5001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            : <circle style={{ transform: `translate(${look ? eyePositionX() : '11px'}, ${look ? eyePositionY() : '11px'})` }} cx="20.587" cy="20.587" r="20.587" fill={eyeColor} />
          }
        </svg>
        <svg className='mouth' width="29" height="12" viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.23644 1C-0.763456 9.5 25.7366 17.5 27.7364 1" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}

Bug.propTypes = {
  position: PropTypes.oneOf(['leftTop', 'leftBottom', 'rightTop', 'rightBottom']),
  color: PropTypes.string,
  smile: PropTypes.bool,
  eyeColor: PropTypes.string,
  look: PropTypes.bool,
};

Bug.defaultProps = {
  position: 'leftBottom',
  color: '#EBB221',
  smile: false,
  eyeColor: '#E14040',
  look: false
};

export default Bug