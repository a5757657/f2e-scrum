import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({
  color,
  text,
  arrow,
  onClick
}) => {
  return (
    <button style={{ background: color }} className='whiteBlockButton' onClick={onClick} >
      {arrow ?
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="45" fill="none" viewBox="0 0 58 45">
          <g fill="#fff">
            <path d="M0 18.87a5 5 0 0 1 5-5h17.424a5 5 0 0 1 5 5v5.564a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V18.87Z" />
            <path d="M55.5 17.692c3.333 1.925 3.333 6.736 0 8.66L26.03 43.367c-3.334 1.925-7.5-.48-7.5-4.33V5.007c0-3.849 4.166-6.254 7.5-4.33L55.5 17.692Z" />
          </g>
        </svg> : text
      }
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  arrow: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: '#EBB221',
  text: '請輸入文字',
  arrow: false,
  onClick: () => { }
};

export default Button