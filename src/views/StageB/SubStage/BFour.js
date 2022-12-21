import React, { useContext, useState, useEffect } from 'react'
import stageContext from '../../../context/stageContext'
import Bug from '../../../components/Bug/Bug'
import './BFour.scss'
import OptionSpace from '../OptionSpace'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const BFour = () => {
    const { userName, setLayoutColor, setStage } = useContext(stageContext)
    useEffect(() => {
        setLayoutColor('B4')
    }, [])
    const [items, setItems] = useState(["會員系統（登入、註冊、管理)", "前台職缺列表（缺詳細內容、點選可發送應徵意願）", "應徵者的線上履歷編輯器", "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）"]);
    const onDragEnd = (event) => {
        console.log(event);
        const { source, destination } = event;

        if (!destination) {
            return;
        }

        // 拷貝新的items (來自state)
        let newItems = [...items];

        // splice(start, deleteCount, item )
        // 從source.index剪下被拖曳的元素
        const [remove] = newItems.splice(source.index, 1);

        //在destination.index位置貼上被拖曳的元素
        newItems.splice(destination.index, 0, remove);

        // 設定新的 items
        setItems(newItems);
    };


    return (
        <div className='BFour'>
            <Bug position={"leftTop"} color={"#EBB221"} look={true} />
            <div className='questionContainer'>
                <p>請大中天把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
                <p>我們公司也推薦使用 Jira 來做任務的管理呢!</p>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className='answerContainer'>
                    <div className="title">
                        <p>產品待辦清單 ProductBacklog</p>
                    </div>
                    <div className='optionContainer'>
                        <p>優先度高</p>
                        <Droppable droppableId="drop-id">
                            {(provided, snapshot) => (
                                <div className='optionContainer' ref={provided.innerRef} {...provided.droppableProps}>
                                    {items.map((item, i) => (
                                        <div key={item}>
                                            <Draggable draggableId={item} index={i} key={item}>
                                                {(provided) => (
                                                    <div className='optionBlock'
                                                        key={i}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <p>{item}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        </div>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <p>優先度低</p>
                    </div>

                </div >
            </DragDropContext >
        </div >
    )
}

export default BFour