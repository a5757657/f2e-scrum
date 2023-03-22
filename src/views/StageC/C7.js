import React, { useContext, useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { nanoid } from 'nanoid'
import stageContext from './../../context/stageContext'
import Button from '../../components/Button/Button'
import './Items.scss'

const C7 = () => {
  const { setLayoutColor, setStage } = useContext(stageContext)
  const [message, setMessage] = useState('請完成短衝清單')
  const [options, setOptions] = useState([
    {
      id: nanoid(),
      content: '前台職缺列表 （缺詳細內容、點選可發送應徵意願）',
      point: 5,
    },
    {
      id: nanoid(),
      content: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
      point: 8,
    },
    {
      id: nanoid(),
      content: '會員系統（登入、註冊、權限管理）',
      point: 8,
    },
    {
      id: nanoid(),
      content: '應徵者的線上履歷編輯器',
      point: 13,
    },
  ])
  const [items, setItems] = useState([
    {
      id: nanoid(),
      content: '',
      point: 0,
    },
    {
      id: nanoid(),
      content: '',
      point: 0,
    },
    {
      id: nanoid(),
      content: '',
      point: 0,
    },
    {
      id: nanoid(),
      content: '',
      point: 0,
    },
  ])

  const onDragEnd = event => {
    const { source, destination } = event
    if (destination) {
      const newOptions = JSON.parse(JSON.stringify(options))
      const newItems = JSON.parse(JSON.stringify(items))
      const sid = source.index
      const did = destination.index
      if (source.droppableId === 'productBacklog' && destination.droppableId === 'productBacklog') {
        const data = newOptions[sid]
        newOptions.splice(sid, 1)
        newOptions.splice(did, 0, data)
      } else if ((source.droppableId === 'sprintList' && destination.droppableId === 'sprintList')) {
        const data = newItems[sid]
        newItems.splice(sid, 1)
        newItems.splice(did, 0, data)
      } else if (source.droppableId === 'productBacklog' && destination.droppableId === 'sprintList') {
        if (!newItems[did].content) {
          newItems[did] = newOptions[sid]
          newOptions[sid] = {
            content: "",
            id: nanoid(),
            point: 0
          }
        } else {
          const data = newItems[did]
          newItems[did] = newOptions[sid]
          newOptions[sid] = data
        }
      } else {
        if (!newOptions[did].content) {
          newOptions[did] = newItems[sid]
          newItems[sid] = {
            content: "",
            id: nanoid(),
            point: 0
          }
        } else {
          const data = newOptions[did]
          newOptions[did] = newItems[sid]
          newItems[sid] = data
        }
      }
      setItems(newItems)
      setOptions(newOptions)
    }
  }

  const handleCheckAnswer = () => {
    if (message === '') {
      setLayoutColor('D1')
      setStage('D')
    }
  }

  useEffect(() => {
    setLayoutColor('C7')
  })

  useEffect(() => {
    const score = items.reduce((a, b) => a + b.point, 0)
    const length = items.filter(d => d.point > 0).length
    if (score > 20) {
      setMessage('已超出負荷點數！')
    } else if (score === 18 || score === 16 || score === 13) {
      setMessage('')
    } else if (length === 1) {
      setMessage('清單仍能放入更多項目')
    }
  }, [items])
  

  return (
    <div className="C7">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="main">
          <div className="question">
            <div className="title">產品待辦清單 ProductBacklog</div>
            <div className="tag">優先度高</div>
            <Droppable droppableId="productBacklog">
              {(provided, snapshot) => (
                <div className='wrap' ref={provided.innerRef} {...provided.droppableProps}>
                  {options.map((item, i) => (
                    <div key={item.id}>
                      <Draggable draggableId={item.id} index={i} key={item.id}>
                        {(provided) => (
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
                            {item.point ? <div className="point">{item.point}</div> : ''}
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <p className="tag">優先度低</p>
            <div className="emptyWrap">
              <div className="blocks"></div>
              <div className="blocks"></div>
              <div className="blocks"></div>
              <div className="blocks"></div>
            </div>
          </div>
          <div className="answer">
            <div className="title">開發 A 組的短衝辦清單</div>
            <div className="tag">20 點 / 5 人</div>
            <Droppable droppableId="sprintList">
              {(provided, snapshot) => (
                <div className='wrap' ref={provided.innerRef} {...provided.droppableProps}>
                  {items.map((item, i) => (
                    <div key={item.id}>
                      <Draggable draggableId={item.id} index={i} key={item.id}>
                        {(provided) => (
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
                            {item.point ? <div className="point">{item.point}</div> : ''}
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <p className="tag1">{message}</p>
            <div className="emptyWrap">
              <div className="blocks"></div>
              <div className="blocks"></div>
              <div className="blocks"></div>
              <div className="blocks"></div>
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
          onClick={handleCheckAnswer}
        />
      </div>
    </div>
  )
}

export default C7
