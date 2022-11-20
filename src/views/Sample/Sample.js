import React, { useContext } from 'react'
import stageContext from '../../context/stageContext'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Bug from '../../components/Bug/Bug.js'
import Button from '../../components/Button/Button'
import './Sample.scss'

const Sample = () => {
  const { userName } = useContext(stageContext)
  const { stage, setStage } = useContext(stageContext)
  const next = stage === "sampleNext"
  return (
    <div className="Sample">
      <Bug color={'#aaa'} position={'leftBottom'} />
      <Bug smile={next} position={'leftTop'} />
      <Bug look={next} color={'#faf'} position={'rightTop'} />
      <Bug look={next} eyeColor={'#aaf'} position={'rightBottom'} />
      <WhiteBlock
        button={
          <Button
            arrow
            color={"lightblue"}
            onClick={() => setStage("sampleNext")}
          />
        }
      >
        <div className="textContainer">
          {next ? (
            <>
              <p>嗨！{userName} 歡迎加入 TT 資訊</p>
              <p>在正式加入專案開發之前</p>
              <p>需要請你先了解 Scrum 的流程與精神！</p>
              <p className='marginTop'>請接受挑戰任務</p>
              <p>成功通過 Scrum 新手村的挑戰吧！</p>
            </>
          ) : (
            <>
              <p>什麼叫這不是你想要的！？</p>
              <p>那你來報到幹嘛...</p>
            </>
          )}
        </div>
      </WhiteBlock>
    </div>
  )
}

export default Sample
