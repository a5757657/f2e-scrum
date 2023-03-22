import React, { useState } from 'react'
import Layout from './components/Layout/Layout'
import Sample from './views/Sample/Sample'
import StageA from './views/StageA/StageA'
import StageB from './views/StageB/StageB'
import StageC from './views/StageC/StageC'
import StageD from './views/StageD/StageD'
import StageE from './views/StageE/StageE'
import StageF from './views/StageF/StageF'
import { Provider } from './context/stageContext'
import './styles/global.scss'


function App() {
  const [layoutColor, setLayoutColor] = useState('A1')
  const [userName, setUserName] = useState('')
  const [stage, setStage] = useState('F')
  return (
    <div className="App">
      <Provider value={{
        layoutColor,
        setLayoutColor,
        userName,
        setUserName,
        stage,
        setStage
      }}>
        <Layout>
          <div style={{ width: '100%', height: '100%', zIndex: 1 }}>
            {stage === 'sample' && <Sample />}
            {stage === 'A' && <StageA />}
            {stage === 'B' && <StageB />}
            {stage === 'C' && <StageC />}
            {stage === 'D' && <StageD />}
            {stage === 'E' && <StageE />}
            {stage === 'F' && <StageF />}
          </div>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
