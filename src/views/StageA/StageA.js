import React, { useContext, useState } from 'react'
import stageContext from '../../context/stageContext'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Button from '../../components/Button/Button'
import './StageA.scss'
import Input from '../../components/Input/Input'

const StageA = () => {
  const { userName, setUserName, setStage } = useContext(stageContext)
  const [subStage, setSubStage] = useState("AOne")

  return (
    <div className="StageA">
      {subStage === "AOne" ? (<WhiteBlock button={<Button text={"接受挑戰"} color={'#E14040'} onClick={() => setSubStage("ATwo")} />}>
        <p>嗨！歡迎加入 TT 資訊</p>
        <p>在正式加入專案開發之前</p>
        <p>需要請你先了解 Scrum 的流程與精神！</p>
        <p className='marginTop'>請接受挑戰任務</p>
        <p>成功通過 Scrum 新手村的挑戰吧！</p>
      </WhiteBlock>) :
        (<WhiteBlock button={<Button text={"開始挑戰"} color={'#E14040'} onClick={() => setStage("B")} />}>
          <p className='marginBottom'>你的大名是？</p>
          <Input value={userName} placeholder='請輸入您的名稱' onChange={(e) => setUserName(e.target.value)} />
        </WhiteBlock>)}
    </div>

  )
}

export default StageA