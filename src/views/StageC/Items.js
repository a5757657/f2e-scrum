import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './Items.scss'

const Items = ({ content, point }) => {
    return (
        <Draggable draggabledId={item.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        className="item"
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="content">
                            {item.content.map((item, index) => (
                                <p key={item[0] + index}>{item}</p>
                            ))}
                        </div>
                        <div className="point">{item.point}</div>
                    </div>
                )
            }}
        </Draggable>
    )
}
export default Items
