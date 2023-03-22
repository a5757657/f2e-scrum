// import React from 'react'
// import './Items.scss'

// const Items = (props) => {
//     const { content, point } = props
//     return (
//             <div className="item">
//                 <div className="content">
//                     {content.map((item, index) => (
//                         <p key={item[0] + index}>{item}</p>
//                     ))}
//                 </div>
//                 <div className="point">{point}</div>
//             </div>
//     )
// }
// export default Items

import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './Items.scss'

const Items = ({ item, index }) => {
    return (
        <Draggable draggabledId={item.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        className={item.content ? "item" : 'emptyItem'}
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="content">
                            {item.content}
                        </div>
                        {item.point && <div className="point">{item.point}</div>}
                    </div>
                )
            }}
        </Draggable>
    )
}
export default Items
