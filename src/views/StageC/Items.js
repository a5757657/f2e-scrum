import React from 'react'
import './Items.scss'

const Items = (props) => {
    const { content, point } = props
    return (
            <div className="item">
                <div className="content">
                    {content.map((item, index) => (
                        <p key={item[0] + index}>{item}</p>
                    ))}
                </div>
                <div className="point">{point}</div>
            </div>
    )
}
export default Items