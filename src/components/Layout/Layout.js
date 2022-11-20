import React, { useContext } from 'react'
import './Layout.scss'
import stageContext from './../../context/stageContext'
import { colors } from './../../styles/global.js'

const colorObject = {
  // sample 的部分之後可以刪掉
  sample: colors.Grayscale600,
  sampleNext: colors.Grayscale600,

  A1: colors.Grayscale600,
  A2: colors.Grayscale600,
  B1: colors.Yellow200,
  B2: colors.Yellow200,
  B3: colors.Yellow200,
  B4: colors.Yellow100,
  B5: colors.Yellow100,
  C1: colors.Blue300,
  C2: colors.Blue300,
  C3: colors.Blue300,
  C4: colors.Blue300,
  C5: colors.Blue300,
  C6: colors.Blue300,
  C7: colors.Blue100,
  D1: colors.Blue300,
  D2: colors.Blue300,
  D3: colors.Blue300,
  D4: colors.Blue300,
  D5: colors.Blue300,
  D6: colors.Blue300,
  D7: colors.Red100,
  E1: colors.Lightblue300,
  E2: colors.Lightblue300,
  E3: colors.Lightblue100,
};
const Layout = ({ children }) => {
  const { stage } = useContext(stageContext);
  return (
    <div className="Layout" style={{ background: colorObject[stage] }}>
      {children}
    </div>
  )
}

export default Layout