import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [backup, setBackup] = useState([])

  const handlePos = (e) => {
    const posX = e.clientX
    const posY = e.clientY

    setCount(prev => [...prev, {posX, posY}])
  }

  const handleUndo = (e) => {
    e.stopPropagation()

    if(count?.length <= 0) return

    const pop = count.pop()
    setBackup(prev => [...prev, pop])
  }

  const handleRedo = (e) => {
    e.stopPropagation()

    if(backup?.length <= 0) return

    const push = backup.pop()

    setCount(prev => [...prev, push])
  }

  return (
    <div className="App">
      <div id="container" onClick={handlePos}>
        <div className="button-content">
          <button type="button" className="undo" onClick={handleUndo}>Undo</button>
          <button type="button" className="redo" onClick={handleRedo}>Redo</button>
        </div>
        {count.map((item, index) => (
          <span className="circle" key={index} style={{top: `${item.posY - 9}px`, left: `${item.posX - 9}px`}}></span>
          ))}
      </div>
    </div>
  )
}

export default App
