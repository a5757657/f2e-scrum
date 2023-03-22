import React, { useState, useContext } from 'react'
import './StageE.scss'
import Bug from '../../components/Bug/Bug'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Button from '../../components/Button/Button'
import stageContext from '../../context/stageContext'

const stageArr = ['E1', 'E2', 'E3']

const StageE = () => {
  const { userName, setLayoutColor, setStage } = useContext(stageContext)
  const [nextStage, setNextStage] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [answer, setAnswer] = useState(['',''])

  const E1 = () => {
    return (
      <div className='E1'>
        <p>哇賽新來的{userName}，你真的很幸運！</p>
        <p>今天剛好是開發 B 組的 Retro</p>
        <p>你也來見識一下，看看 Retro都該做些什麼吧～</p>
      </div>
    )
  }
  const E2 = () => {
    return (
      <div className='E2'>
        <p>我們會在會議裡請團隊成員提出哪些是做得好的地方、</p>
        <p>哪些可以繼續改善的地方？</p>
        <p className='mt'>並記錄再 Confluence 中。</p>
      </div>
    )
  }

  const handleInputChange = (idx, value) => {
    const newAns = answer
    newAns[idx] = value
    setAnswer([...newAns])
  }

  const handleCheckAnswer = () => {
    const newAns = answer
    if (newAns.join('') === '21') {
      setCorrect(false)
      setStage('F')
      setLayoutColor('F1')
    } else {
      setCorrect(true)
    }
  }

  const findStage = () => {
    switch (stageArr[nextStage]) {
      case 'E1':
        return <E1 />
      case 'E2':
        return <E2 />
      default:
        break;
    }
  }
  
  const E3 = () => {
    setLayoutColor('E3')
    return (
      <div className='E3'>
        <div className="head">
          <p className='title'>重點在於「正面表述」你也思考看看，</p>
          <p className='title'>哪一些是適合 Retro 的回饋吧！</p>
        </div>
        <div className="question">
          <div className="Q1">
            <p className='title'>做得好的地方</p>
            <div className='inputWrap'>
              <input checked={answer[0] === '1'} onChange={e => handleInputChange(0, e.target.value)} type="radio" id="input1" name="good" value='1' />
              <label htmlFor="input1">
                <div className="check">
                  <div></div>
                </div>
                這次我幫了很多人救火耶 ^_^  
              </label>
            </div>
            <div className='inputWrap'>
              <input checked={answer[0] === '2'} onChange={e => handleInputChange(0, e.target.value)} type="radio" id="input2" name="good" value='2' />
              <label htmlFor="input2">
                <div className="check">
                  <div></div>
                </div>
                大家在開發上都會互相 cover，讓任務都有準在時間內完成。
              </label>
            </div>
          </div>
          <div className="Q2">
            <p className='title'>有哪些可以做得更好？</p>
            <div className='inputWrap'>
              <input checked={answer[1] === '1'} onChange={e => handleInputChange(1, e.target.value)} type="radio" id="input3" name="moreGood" value='1' />
              <label htmlFor="input3">
                <div className="check">
                  <div></div>
                </div>
                可以記錄這次的開發時間，讓預估團隊點數可以更精準。
              </label>
            </div>
            <div className='inputWrap'>
              <input checked={answer[1] === '2'} onChange={e => handleInputChange(1, e.target.value)} type="radio" id="input4" name="moreGood" value='2' />
              <label htmlFor="input4">
                <div className="check">
                  <div></div>
                </div>
                開發時間預估不準確，請後端下次改進，避免 delay 到我：）
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="StageE">
      <Bug
        position={'rightTop'}
        color={'#89c2ce'}
        eyeColor={'#0d0d0d'}
      />
      {stageArr[nextStage] === 'E3' ? (
        <>
          <WhiteBlock>
            <E3 />
          </WhiteBlock>
          <div className="buttonWrap">
            {correct && <span className='reTry'>再試試看！</span>}
            <Button onClick={() => handleCheckAnswer()} color='#fff' fontColor='#4DA3B5' text='送出 Retro 回饋' />
          </div>
        </>
      ) : (
        <WhiteBlock
          button={
            <Button
              onClick={() => nextStage < 3 && setNextStage(prev => prev + 1)}
              color='#4DA3B5'
              arrow={nextStage !== 1}
              text='我想我了解了！'
            />
          }
        >
          {findStage()}
        </WhiteBlock>
      )}
    </div>
  )
}

export default StageE