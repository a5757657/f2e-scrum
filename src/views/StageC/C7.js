// import React, { useContext, useEffect } from 'react'
// import stageContext from './../../context/stageContext'
// import Button from '../../components/Button/Button'
// import Items from './Items'
// import { data } from './data'

// const C7 = (props) => {
//     const { content, point } = props
//     const { userName, setLayoutColor } = useContext(stageContext)
//     useEffect(() => {
//         setLayoutColor('C7')
//     }, [])

//     return (
//         <div className="C7">
//             <div className="main">
//                 <div className="question">
//                     <div className="title">產品待辦清單 ProductBacklog</div>
//                     <div className="tag _margin">優先度高</div>
//                     <div className="wrap">
//                         <Items
//                             content={data[0].content}
//                             point={data[0].point}
//                         />
//                         <Items
//                             content={data[1].content}
//                             point={data[1].point}
//                         />
//                         <Items
//                             content={data[2].content}
//                             point={data[2].point}
//                         /><Items
//                             content={data[3].content}
//                             point={data[3].point}
//                         />
//                     </div>
//                     <div className="tag">優先度低</div>
//                 </div>
//                 <div className="answer">
//                     <div className="title">開發 A 組的短衝辦清單</div>
//                     <div className="tag _margin">20 點 / 5 人</div>
//                     <div className="blocks"></div>
//                     <div className="blocks"></div>
//                     <div className="blocks"></div>
//                     <div className="blocks"></div>
//                     <div className="tag">20 點 / 5 人</div>
//                 </div>
//             </div>
//             <div className='btnArea'>
//                 <div className='ex'>可以把產品待辦清單在點數限制內移動到短衝清單。</div>
//                 <Button text='準備好了，開始 Sprint' color='#fff' fontColor=' #3492d5'></Button>
//             </div>
//         </div>
//     )
// }

// export default C7

import React, { useContext, useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { nanoid } from 'nanoid'
import stageContext from './../../context/stageContext'
import Button from '../../components/Button/Button'
import Items from './Items'
// import { data } from './data'

const C7 = () => {
    const { setLayoutColor } = useContext(stageContext)

    const [msg,setMsg] = useState('')
    const result = () => {
        if (ttlPoint < 12 || (ttlPoint === 13 && id === '4')) {
            setMsg('')
            return 
        } else if (13 <= ttlPoint && ttlPoint < 20) {
            setMsg('')
            return 
        } else {
            setMsg('')
            return 
        }
    }
    const [itemObj, setItemObj] = useState({
        productBacklog: {
            items: [
                {
                    id: 1,
                    content: '前台職缺列表 （缺詳細內容、點選可發送應徵意願）',
                    point: '5',
                },
                {
                    id: 2,
                    content:'後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
                    point: '8',
                },
                {
                    id: 3,
                    content: '會員系統（登入、註冊、權限管理）',
                    point: '8',
                },
                {
                    id: 4,
                    content: '應徵者的線上履歷編輯器',
                    point: '13',
                },
            ],
        },
        sprintList: {
            items: [],
        },
    })

    const [id, setId] = useState('')
    const [ttlPoint, setTtlPoint] = useState(0)

    const onDragEnd = (event) => {
        const { source, destination } = event
        if (!destination) {
            return
        }
        // 拷貝新的items(useState)
        let newItemObj = { ...itemObj }

        // splice(start, deleteCount, item )
        // 從source剪下被拖曳的元素
        const [remove] = newItemObj[source.droppableId].items.splice(
            source.index,
            1
        )

        // 在destination位置貼上被拖曳的元素
        newItemObj[destination.droppableId].items.splice(
            destination.index,
            0,
            remove
        )

        // set state新的 itemObj
        setItemObj(newItemObj)

        // 計算sprint內的分數總和
        const newTotalScoreSum = newItemObj.sprintList.items.reduce(
            (acc, val) => acc + val.point,
            0
        )
        setTtlPoint(newTotalScoreSum)

        setId(newItemObj.sprintList.items.id)
    }

    useEffect(() => {
        setLayoutColor('C7')
    }, [])

    return (
        <div className="C7">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="main">
                    <div className="question">
                        <div className="title">產品待辦清單 ProductBacklog</div>
                        <div className="tag">優先度高</div>
                        <Droppable droppableId="productBacklog">
                            {(provided, snapshot) => (
                                <div
                                    className="wrap"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {itemObj.productBacklog.items.map(
                                        (item, index) => (
                                            <Items
                                                item={item}
                                                index={index}
                                                key={item.id}
                                            />
                                        )
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <div className="tag">優先度低</div>
                    </div>

                    <div className="answer">
                        <div className="title">開發 A 組的短衝辦清單</div>
                        <div className="tag">20 點 / 5 人</div>
                        <Droppable droppableId="sprintList">
                            {(provided, snapshot) => (
                                <div
                                    className="wrap"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {itemObj.sprintList.items.map(
                                        (item, index) => (
                                            <Items
                                                item={item}
                                                index={index}
                                                key={item.id}
                                            />
                                        )
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <div className="blocks"></div>
                        <div className="blocks"></div>
                        <div className="blocks"></div>
                        <div className="blocks"></div>
                        <div className="tag">
                            {ttlPoint > 20 && msg}
                        </div>
                    </div>
                </div>
            </DragDropContext>
            <div className="btnArea">
                <div className="ex">
                    可以把產品待辦清單在點數限制內移動到短衝清單。
                </div>
                <Button
                    text="準備好了，開始 Sprint"
                    color="#fff"
                    fontColor="#3492d5"
                    arrow={false}
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}

export default C7
