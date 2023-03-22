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
  const [layoutColor, setLayoutColor] = useState('D1')
  const [userName, setUserName] = useState('林怡珊')
  const [stage, setStage] = useState('A')
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
          {stage === 'sample' && <Sample />}
          {stage === 'A' && <StageA />}
          {stage === 'B' && <StageB />}
          {stage === 'C' && <StageC />}
          {stage === 'D' && <StageD />}
          {stage === 'E' && <StageE />}
          {stage === 'F' && <StageF />}
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
