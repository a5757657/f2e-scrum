import React, { useContext, useState, useEffect } from 'react'
import stageContext from '../../../context/stageContext'
import Bug from '../../../components/Bug/Bug'
import './BFour.scss'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { nanoid } from "nanoid";
import Button from '../../../components/Button/Button'


const BFour = () => {
  const { userName, setLayoutColor, setStage } = useContext(stageContext)
  const [correct, setCorrect] = useState(false)
  useEffect(() => {
    setLayoutColor('B4')
  })
  const [items, setItems] = useState(
    [
      {
        content: '',
        id: nanoid(),
        priority: ''
      },
      {
        content: '',
        id: nanoid(),
        priority: ''
      },
      {
        content: '',
        id: nanoid(),
        priority: ''
      },
      {
        content: '',
        id: nanoid(),
        priority: ''
      }
    ]
  );
  const [options, setOptions] = useState(
    [
      {
        content: "會員系統（登入、註冊、管理)",
        id: nanoid(),
        priority: 1
      },
      {
        content: "前台職缺列表（缺詳細內容、點選可發送應徵意願）",
        id: nanoid(),
        priority: 3
      },
      {
        content: "應徵者的線上履歷編輯器",
        id: nanoid(),
        priority: 2
      },
      {
        content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
        id: nanoid(),
        priority: 4
      }
    ]
  );
  const onDragEnd = (event) => {
    const { source, destination } = event;
    if (destination) {
      const newOptions = JSON.parse(JSON.stringify(options))
      const newItems = JSON.parse(JSON.stringify(items))
      const sid = source.index
      const did = destination.index
      if (source.droppableId === 'drop-id') {
        const data = newItems[sid]
        newItems.splice(sid, 1)
        newItems.splice(did, 0, data)
      } else {
        if (!newItems[did].content) {
          newItems[did] = newOptions[sid]
          newOptions[sid] = {
            content: "",
            id: nanoid(),
            priority: ""
          }
        } else {
          const data = newItems[did]
          newItems[did] = newOptions[sid]
          newOptions[sid] = data
        }
      }
      setItems(newItems)
      setOptions(newOptions)
    }
  };

  const handleCheckAnswer = () => {
    const newItems = JSON.parse(JSON.stringify(items)).map(d => d.priority).join('')
    if (newItems === '1234') {
      setStage('C')
    } else {
      setCorrect(true)
      setItems([
        {
          content: '',
          id: nanoid(),
          priority: ''
        },
        {
          content: '',
          id: nanoid(),
          priority: ''
        },
        {
          content: '',
          id: nanoid(),
          priority: ''
        },
        {
          content: '',
          id: nanoid(),
          priority: ''
        }
      ])
      setOptions([
        {
          content: "會員系統（登入、註冊、管理)",
          id: nanoid(),
          priority: 1
        },
        {
          content: "前台職缺列表（缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          priority: 3
        },
        {
          content: "應徵者的線上履歷編輯器",
          id: nanoid(),
          priority: 2
        },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          priority: 4
        }
      ])
    }
  }

  return (
    <div className='BFour'>
      <Bug position={"leftTop"} color={"#EBB221"} look={true} />
      <div className='questionContainer'>
        <p>請{userName}把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
        <p>我們公司也推薦使用 Jira 來做任務的管理呢!</p>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='answerContainer'>
          <div className="title">
            <p>產品待辦清單 ProductBacklog</p>
          </div>
          <div style={{ gap: 15 }} className='optionContainer'>
            <p>優先度高</p>
            <Droppable droppableId="drop-id">
              {(provided, snapshot) => (
                <div style={{ gap: 15 }} className='optionContainer optionContainer1' ref={provided.innerRef} {...provided.droppableProps}>
                  {items.map((item, i) => (
                    <div key={item.id}>
                      <Draggable draggableId={item.id} index={i} key={item.id}>
                        {(provided) => (
                          <div className={item.content ? 'optionBlock' : 'empty'}
                            key={i}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <p>{item.content}</p>
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
            <div className="borderContainer">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div >
        {options[0].content && (
          <Droppable droppableId="single-1">
            {(provided, snapshot) => (
              <div className='option' id='option1' ref={provided.innerRef} {...provided.droppableProps}>
                <div key={options[0].id}>
                  <Draggable draggableId={options[0].id} index={0} key={options[0].id}>
                    {(provided) => (
                      <div className='optionBlock'
                        key={0}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <p>{options[0].content}</p>
                      </div>
                    )}
                  </Draggable>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
        {options[1].content && (
          <Droppable droppableId="single-2">
          {(provided, snapshot) => (
            <div className='option' id='option2' ref={provided.innerRef} {...provided.droppableProps}>
              <div key={options[1].id}>
                <Draggable draggableId={options[1].id} index={1} key={options[1].id}>
                  {(provided) => (
                    <div className='optionBlock'
                      key={1}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <p>{options[1].content}</p>
                    </div>
                  )}
                </Draggable>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        )}
        {options[2].content && (
          <Droppable droppableId="single-3">
          {(provided, snapshot) => (
            <div className='option' id='option3' ref={provided.innerRef} {...provided.droppableProps}>
              <div key={options[2].id}>
                <Draggable draggableId={options[2].id} index={2} key={options[2].id}>
                  {(provided) => (
                    <div className='optionBlock'
                      key={2}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <p>{options[2].content}</p>
                    </div>
                  )}
                </Draggable>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        )}
        {options[3].content && (
          <Droppable droppableId="single-4">
          {(provided, snapshot) => (
            <div className='option' id='option4' ref={provided.innerRef} {...provided.droppableProps}>
              <div key={options[3].id}>
                <Draggable draggableId={options[3].id} index={3} key={options[3].id}>
                  {(provided) => (
                    <div className='optionBlock'
                      key={3}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <p>{options[3].content}</p>
                    </div>
                  )}
                </Draggable>
              </div>
              {provided.placeholder}
            </div>
          )}
          </Droppable>
        )}
      </DragDropContext >
      <div className="buttonWrap">
        {correct && <span className='reTry'>再試試看！</span>}
        <Button onClick={() => handleCheckAnswer()} color='#fff' fontColor='#E14040' text='完成了' />
      </div>
    </div >
  )
}

export default BFour