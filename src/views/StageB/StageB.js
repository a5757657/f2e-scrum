import React, { useContext, useState, useEffect } from 'react'
import './StageB.scss'
import stageContext from '../../context/stageContext'
import BSubStageLayout from './SubStage/BSubStageLayout'
import BFour from './SubStage/BFour'



const StageB = () => {
  const { userName, setLayoutColor } = useContext(stageContext)
  const [subStage, setSubStage] = useState("BOne")
  useEffect(() => {
    setLayoutColor('B1')
  })


  const BOne = () => {
    return <BSubStageLayout handleOnClick={() => setSubStage("BTwo")} arrow={true}>
      <p>Hi！{userName}！</p>
      <p>我是 TT 資訊，開發 A 組的 PO，小敏。</p>
    </BSubStageLayout>
  }
  const BTwo = () => {
    return <BSubStageLayout handleOnClick={() => setSubStage("BThree")} arrow={true}>
      <p>{userName}你知道嗎？</p>
      <p>PO 也就是 <span style={{ color: "#E14040" }}>產品負責人 Product owner</span></p>
      <p>產品負責人會負責評估產品待辦清單的價值與重要性</p>
      <p>依序排列要執行的優先順序，對齊產品目標</p>
      <p>最後排出 <span style={{ color: "#3492D6" }}>產品待辦清單 Product Backlog</span> 唷！</p>
    </BSubStageLayout>
  }
  const BThree = () => {
    return <BSubStageLayout handleOnClick={() => setSubStage("BFour")} arrow={false} text={"開始挑戰"}  >
      <p>剛好我最近手邊有一個 <span style={{ color: "#999999" }}>人才招募系統</span> 的案子</p>
      <p>我才剛列出了他的 <span style={{ color: "#A87D0F" }}>產品需求清單</span></p>
      <p>既然{userName}你都來了</p>
      <p>來試試看調整產品優先度，排出 <span style={{ color: "#3492D6" }}>產品待辦清單</span> 吧！</p>
    </BSubStageLayout>
  }


  return (
    <div className="StageB">
      {subStage === "BOne" && BOne()}
      {subStage === "BTwo" && BTwo()}
      {subStage === "BThree" && BThree()}
      {subStage === "BFour" && <BFour />}
    </div>
  )
}

export default StageB