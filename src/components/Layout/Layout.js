import React, { useContext } from 'react'
import './Layout.scss'
import stageContext from './../../context/stageContext'
import { colors } from './../../styles/global.js'

const colorObject = {
  A1: colors.Grayscale600,
  B1: colors.Yellow200,
  B4: colors.Yellow100,
  C1: colors.Blue300,
  C7: colors.Blue100,
  D1: colors.Blue300,
  D7: colors.Red100,
  E1: colors.Lightblue300,
  E3: colors.Lightblue100,
}
const Layout = ({ children }) => {
  const { layoutColor } = useContext(stageContext)
  return (
    <div className='Layout' style={{ background: colorObject[layoutColor] }}>
      {children}
    </div>
  )
}

export default Layout