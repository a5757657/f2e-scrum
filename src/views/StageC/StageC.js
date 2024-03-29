import React, { useContext, useState, useEffect } from 'react'
import './StageC.scss'
import stageContext from '../../context/stageContext'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Bug from '../../components/Bug/Bug.js'
import Button from '../../components/Button/Button'
import C1 from './C1'
import C2 from './C2'
import C3 from './C3'
import C4 from './C4'
import C5 from './C5'
import C6 from './C6'
import C7 from './C7'

const stagePage = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']

const StageC = () => {
  const { setLayoutColor } = useContext(stageContext)
  const [page, setPage] = useState(0)
  const nowPage = () => {
    switch (stagePage[page]) {
      case 'C1':
        return <C1 />
      case 'C2':
        return <C2 />
      case 'C3':
        return <C3 />
      case 'C4':
        return <C4 />
      case 'C5':
        return <C5 />
      case 'C6':
        return <C6 />
      case 'C7':
        return <C7 />
      default:
        break
    }
  }

  useEffect(() => {
    if (page === 6) {
      setLayoutColor('C7')
    }
  }, [page, setLayoutColor])
  
  return (
    <div className="StageC">
      {page < 6 && (
        <Bug
          position={'leftBottom'}
          color={'#ebb221'}
          eyeColor={'#e14040'}
          look={page === 0 ? false : true}
        />
      )}
      {3 <= page && page < 6 && (
        <Bug
          position={'leftTop'}
          color={'#cccccc'}
          eyeColor={'#0d0d0d'}
          look={page === 4 ? false : true}
        />
      )}
      {3 <= page && page < 6 && (
        <Bug
          position={'rightTop'}
          color={'#89c2ce'}
          eyeColor={'#0d0d0d'}
          look={page === 5 ? false : true}
        />
      )}
      {1 <= page && page < 6 && (
        <Bug
          position={'rightBottom'}
          color={'#e14040'}
          eyeColor={'#3492d5'}
          look={page > 3 ? true : false}
        />
      )}
      {page < 5 && (
        <WhiteBlock
          button={
            <Button
              onClick={() => page < 7 && setPage(page + 1)}
              color="#3492d5"
              arrow
            />
          }
        >
          {nowPage()}
        </WhiteBlock>
      )}
      {stagePage[page] === 'C6' && (
        <WhiteBlock
          button={
            <Button
              onClick={() => page < 7 && setPage(page + 1)}
              color="#3492d5"
              text="沒問題，我來挑戰！"
              arrow={false}
            />
          }
        >
          {nowPage()}
        </WhiteBlock>
      )}
      {stagePage[page] === 'C7' && <C7/>}
    </div>
  )
}

export default StageC
