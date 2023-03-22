import React, { useState } from 'react'
import './StageD.scss'
import Bug from '../../components/Bug/Bug'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Button from '../../components/Button/Button'
import { D1, D2, D3, D4, D5, D6} from './SubStageD'
import D7 from './D7'

const stageArr = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7']

const StageD = () => {
  const [nextStage, setNextStage] = useState(0)
  const findStage = () => {
    switch (stageArr[nextStage]) {
      case 'D1':
        return <D1 />
      case 'D2':
        return <D2 />
      case 'D3':
        return <D3 />
      case 'D4':
        return <D4 />
      case 'D5':
        return <D5 />
      case 'D6':
        return <D6 />
      default:
        break;
    }
  }
  return (
    <div className="StageD">
      <Bug eyeColor='#0D0D0D' color='#D9D9D9' position={'leftTop'} />
      {stageArr[nextStage] === 'D7' ? <D7 /> :
        <WhiteBlock
          button={
            <Button
              onClick={() => nextStage < 7 && setNextStage(nextStage + 1)}
              color='#E14040'
              arrow />
          }
        >
        {findStage()}
        </WhiteBlock>
      }
    </div>
  )
}

export default StageD