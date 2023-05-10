import { useState } from 'react'
import LeftSide from './components/leftSide/leftSide'
import RightSide from './components/rightSide/RightSide'

function App() {

const [resultadoIMC, setIMCResult] = useState<number>(0.00)

  return (
    <div className="App">
      <RightSide resultadoIMC={resultadoIMC} />
      <LeftSide resultadoIMC={resultadoIMC} setIMCResult={setIMCResult} />
    </div>
  )
}

export default App
