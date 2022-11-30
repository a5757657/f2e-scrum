import React, { useContext, useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { nanoid } from 'nanoid'
import stageContext from './../../context/stageContext'
import Button from '../../components/Button/Button'
import Items from './Items'
// import { data } from './data'

const C7 = () => {
    const { setLayoutColor } = useContext(stageContext)
    const [itemObj, setItemObj] = useState({
        productBacklog: {
            data: [
                {
                    id: nanoid(),
                    content: [
                        '前台職缺列表',
                        '（缺詳細內容、點選可發送應徵意願）',
                    ],
                    point: '5',
                },
                {
                    id: nanoid(),
                    content: [
                        '後台職缺管理功能',
                        '（資訊上架、下架、顯示應徵者資料）',
                    ],
                    point: '8',
                },
                {
                    id: nanoid(),
                    content: ['會員系統（登入、註冊、權限管理）'],
                    point: '8',
                },
                {
                    id: nanoid(),
                    content: ['應徵者的線上履歷編輯器'],
                    point: '13',
                },
            ],
        },
        sprintList: {
            data: [],
        },
    })

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
        const [remove] = newItemObj[source.droppableId].data.splice(
            source.index,
            1
        )

        // 在destination位置貼上被拖曳的元素
        newItemObj[destination.droppableId].data.splice(
            destination.index,
            0,
            remove
        )

        // set state新的 itemObj
        setItemObj(newItemObj)

        // 計算sprint內的分數總和
        const newTotalScoreSum = newItemObj.sprintList.items.reduce(
            (acc, val) => acc + val.score,
            0
        )
        setTotalScoreSum(newTotalScoreSum)
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
                                    {itemObj.productBacklog.data.map(
                                        (item, index) => (
                                            <Items
                                                content={item}
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
                        {(provided, snapshot)=>(
                            <div
                                    className="wrap"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {itemObj.sprintList.data.map(
                                        (item, index) => (
                                            <Items
                                                content={item}
                                                index={index}
                                                key={item.id}
                                            />
                                        )
                                    )}
                                    {provided.placeholder}
                                </div>
                        )}
                        <div className="blocks"></div>
                        <div className="blocks"></div>
                        <div className="blocks"></div>
                        <div className="blocks"></div>
                        </Droppable>
                        <div className="tag">{totalScoreSum>20 && '20 點 / 5 人'}</div>
                    </div>
                </div>
            </DragDropContext>
            <div className='btnArea'>
                <Button color='' text='' fontColor='' arrow={false} onClick={()=>{}} />
            </div>
        </div>
    )
}

export default C7
