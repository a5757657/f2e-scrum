import React, { useContext } from "react";
import "./StageF.scss";
import Bug from '../../components/Bug/Bug'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Button from '../../components/Button/Button'
import stageContext from '../../context/stageContext'

const StageF = () => {
  const { setUserName, setLayoutColor, setStage } = useContext(stageContext)
  return <div className="StageF">
      <Bug
        position={'leftTop'}
        eyeColor='#0D0D0D'
        color='#D9D9D9'
      />
      <Bug
        position={'leftBottom'}
      />
      <Bug
        position='rightTop'
        eyeColor='#0D0D0D'
        color='#89c2ce'
      />
      <Bug
        position={'rightBottom'}
        color='#E14040'
        eyeColor='#3492D6'
      />
      <WhiteBlock
        button={
          <Button
            onClick={() => {
              setStage('A')
              setLayoutColor('A1')
              setUserName('')
            }}
            color='#333333'
            text='再玩一次'
          />
        }
      >
        <div className='F1'>
          <p>恭喜大中天通過 Scrum 新手村！</p>
          <p>正式加入 TT 資訊的開發 A 組</p>
        </div>
      </WhiteBlock>
  </div>;
};

export default StageF;
