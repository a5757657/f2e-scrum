import React, { useContext, useEffect, useState } from 'react'
import stageContext from './../../context/stageContext'
import Button from '../../components/Button/Button'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

const D7 = () => {
  const { userName, setLayoutColor, setStage } = useContext(stageContext)
  const answerArry = '1,2,3';
  const [correct, setCorrect] = useState(false)
  const [option, setOption] = useState([
    {
      content: "短衝檢視會議 Sprint Review",
      id: nanoid(),
      priority: "2"
    },
    {
      content: "短衝自省會議 Sprint Retrospective",
      id: nanoid(),
      priority: "3"
    },
    {
      content: "每日站立會議 Daily Scrum",
      id: nanoid(),
      priority: "1"
    }
  ])
  const [answer, setAnswer] = useState([
    {
      content: "",
      id: nanoid(),
      priority: ""
    },
    {
      content: "",
      id: nanoid(),
      priority: ""
    },
    {
      content: "",
      id: nanoid(),
      priority: ""
    },
  ])
  useEffect(() => {
    setLayoutColor('D7')
  })

  const handleDragOption = event => {
    const destinationId = event.destination.droppableId
    const destinationIdx = event.destination.droppableId === 'answerWrap2' ? 1 : event.destination.index
    const sourceId = event.source.droppableId
    const sourceIdx = event.source.droppableId === 'answerWrap2' ? 1 : event.source.index
    if (sourceId === 'option' && destinationId.includes('answerWrap')) {
      const newAnswer = JSON.parse(JSON.stringify(answer))
      const newOption = JSON.parse(JSON.stringify(option))
      newAnswer[destinationIdx] = option[sourceIdx]
      newOption.splice(sourceIdx, 1, {
        content: "",
        id: nanoid(),
        priority: ""
      })
      setAnswer(newAnswer)
      setOption(newOption)
    }
  }

  const handleCheckAnswer = () => {
    if (answer.every(d => d.content !== '')) {
      const answerArr = answer.map(d => d.priority).join()
      if (answerArr === answerArry) {
        setLayoutColor('E1')
        setStage('E')
      } else {
        setCorrect(true)
        setAnswer(
          [
            {
              content: "",
              id: nanoid(),
              priority: ""
            },
            {
              content: "",
              id: nanoid(),
              priority: ""
            },
            {
              content: "",
              id: nanoid(),
              priority: ""
            },
          ]
        )
        setOption([
          {
            content: "短衝檢視會議 Sprint Review",
            id: nanoid(),
            priority: "2"
          },
          {
            content: "短衝自省會議 Sprint Retrospective",
            id: nanoid(),
            priority: "3"
          },
          {
            content: "每日站立會議 Daily Scrum",
            id: nanoid(),
            priority: "1"
          }
        ])
      }
    } else {
      setCorrect(true)
        setAnswer(
          [
            {
              content: "",
              id: nanoid(),
              priority: ""
            },
            {
              content: "",
              id: nanoid(),
              priority: ""
            },
            {
              content: "",
              id: nanoid(),
              priority: ""
            },
          ]
        )
        setOption([
          {
            content: "短衝檢視會議 Sprint Review",
            id: nanoid(),
            priority: "2"
          },
          {
            content: "短衝自省會議 Sprint Retrospective",
            id: nanoid(),
            priority: "3"
          },
          {
            content: "每日站立會議 Daily Scrum",
            id: nanoid(),
            priority: "1"
          }
        ])
    }
  }
  return (
    <div className='D7'>
      <div className="info">
        <p>那{userName}來試試看，在這經典的 Scrum 流程圖中，</p>
        <p>這些流程分別代表哪一個會議呢？請把對應的流程貼到正確位置。</p>
      </div>
      <DragDropContext onDragEnd={handleDragOption}>
        <div className="DragDropWrap">
          <Droppable droppableId="option">
            {(provided, snapshot) => (
              <div
                className='optionWrap'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {option.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className={item.content === '' ? 'empty' : ''}
                          ref={provided.innerRef}
                          snapshot={snapshot}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="answerWrap1">
            {(provided, snapshot) => (
              <div
                className='answerWrap wrap1'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Draggable index={0}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className={answer[0].content === '' ? 'empty' : ''}
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >{answer[0].content}</div>
                    );
                  }}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="answerWrap2">
            {(provided, snapshot) => (
              <div
                className='answerWrap wrap2'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Draggable index={1}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className={answer[1].content === '' ? 'empty' : ''}
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >{answer[1].content}</div>
                    );
                  }}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="answerWrap3">
            {(provided, snapshot) => (
              <div
                className='answerWrap wrap3'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Draggable index={2}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className={answer[2].content === '' ? 'empty' : ''}
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >{answer[2].content}</div>
                    );
                  }}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="whiteBoxWrap">
            <div className="position"></div>
            <div className="position"></div>
            <div className="position"></div>
          </div>
        </div>
      </DragDropContext>
      <div className="bgArrow">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="sprint">Sprint</div>
        <svg className='arrowLine' xmlns="http://www.w3.org/2000/svg" width="1387" height="58" fill="none" viewBox="0 0 1387 58">
          <path fill="#B01C1C" d="M5 24a5 5 0 0 0 0 10V24Zm1382 5L1337 .132v57.735L1387 29ZM5 34h1337V24H5v10Z" />
        </svg>
        <svg className='curveArrow' xmlns="http://www.w3.org/2000/svg" width="432" height="407" fill="none" viewBox="0 0 432 407">
          <path fill="#B01C1C" d="m27.625 220.405 30.54-48.997-57.702-1.95 27.162 50.947ZM179.653 10.604l-1.176-4.86 1.176 4.86Zm237.044 254.985-4.761-1.528 4.761 1.528Zm-85.033 108.772 2.631 4.251-2.631-4.251Zm-135.419 22.573a5 5 0 1 0 .272 9.997l-.272-9.997ZM34.092 176.16a194.616 194.616 0 0 1 34.934-85.738l-8.098-5.868A204.617 204.617 0 0 0 24.2 174.698l9.893 1.462Zm34.934-85.738A194.618 194.618 0 0 1 180.83 15.463l-2.353-9.719a204.617 204.617 0 0 0-117.549 78.81l8.098 5.868ZM180.83 15.463a194.615 194.615 0 0 1 133.707 15.528l4.518-8.921A204.618 204.618 0 0 0 178.477 5.744l2.353 9.72Zm133.707 15.528a194.616 194.616 0 0 1 91.65 98.587l9.227-3.856A204.62 204.62 0 0 0 319.055 22.07l-4.518 8.921Zm91.65 98.587a194.622 194.622 0 0 1 5.749 134.483l9.522 3.055a204.623 204.623 0 0 0-6.044-141.394l-9.227 3.856Zm5.749 134.483a194.62 194.62 0 0 1-82.903 106.048l5.262 8.503a204.615 204.615 0 0 0 87.163-111.496l-9.522-3.055Zm-82.903 106.048c-19.175 11.866-51.997 18.677-80.802 22.451-14.255 1.867-27.269 2.962-36.722 3.589-4.724.314-8.553.511-11.195.629-1.321.059-2.345.098-3.035.123l-.781.026a8.755 8.755 0 0 0-.194.006l-.047.001h-.013l.137 4.998c.136 4.999.137 4.999.138 4.999l.004-.001h.016l.056-.002.215-.006.824-.028c.719-.025 1.773-.066 3.126-.126 2.706-.121 6.607-.322 11.411-.64 9.604-.638 22.839-1.751 37.358-3.653 28.742-3.765 63.561-10.74 84.766-23.863l-5.262-8.503Z" />
        </svg>
      </div>
      <div className="buttonWrap">
        {correct && <span className='reTry'>再試試看！</span>}
        <Button onClick={() => handleCheckAnswer()} color='#fff' fontColor='#E14040' text='完成了' />
      </div>
    </div>
  )
}

export default D7