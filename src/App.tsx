import { useState } from 'react'
import LeftSide from './components/leftSide/leftSide'
import RightSide from './components/rightSide/RightSide'

function App() {
  return (
    <div className="App">
      <RightSide />
      <LeftSide />
      
    </div>
  )
}

export default App
