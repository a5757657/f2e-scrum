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

const generateStageSection = (stageSection) => {
  switch (stageSection) {
    case "A":
      return <StageA />
    case "B":
      return <StageB />
    case "C":
      return <StageC />
    case "D":
      return <StageD />
    case "E":
      return <StageE />
    case "F":
      return <StageF />
    // default 之後要改成 return <StageA />;
    default:
      return <Sample />
  }
};

function App() {
  const [layoutColor, setLayoutColor] = useState('A1')
  const [userName, setUserName] = useState('林怡珊')
  const [stage, setStage] = useState('sample')
  const stageSection = stage.charAt(0)

  return (
    <div className="App">
      <Provider
        value={{
          userName,
          setUserName,
          stage,
          setStage,
        }}
      >
        <Layout>{generateStageSection(stageSection)}</Layout>
      </Provider>
    </div>
  );
}

export default App;
