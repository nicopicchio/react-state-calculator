import "./App.css"
import { useState } from 'react'

function App() { 
  
  const [displayOne, setDisplayOne] = useState(0)
  const [displayTwo, setDisplayTwo] = useState(0)
  const [operand, setOperand] = useState()

  const clickHandlerLeftPanel = (num) => {
    setDisplayOne(num.target.innerText)
  }

  const clickHandlerRightPanel = (num) => {
    setDisplayTwo(num.target.innerText)
  }

  const clearLeft = () => {
    setDisplayOne(0)
  }

  const clearRight = () => {
    setDisplayTwo(0)
  }

  let total = Number(displayOne + displayTwo)

  console.log(total)

  return (
    <div className="calculator">
        <div className="panel">
          <p>{displayOne}</p>
          <div className="numbers">
            <button onClick={clickHandlerLeftPanel}>7</button>
            <button onClick={clickHandlerLeftPanel}>8</button>
            <button onClick={clickHandlerLeftPanel}>9</button>
            <button onClick={clickHandlerLeftPanel}>4</button>
            <button onClick={clickHandlerLeftPanel}>5</button>
            <button onClick={clickHandlerLeftPanel}>6</button>
            <button onClick={clickHandlerLeftPanel}>1</button>
            <button onClick={clickHandlerLeftPanel}>2</button>
            <button onClick={clickHandlerLeftPanel}>3</button>
            <button onClick={clickHandlerLeftPanel}>0</button>
            <button>.</button>
            <button onClick={clearLeft}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>+</p>
          <div className="numbers">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{displayTwo}</p>
          <div className="numbers">
            <button onClick={clickHandlerRightPanel}>7</button>
            <button onClick={clickHandlerRightPanel}>8</button>
            <button onClick={clickHandlerRightPanel}>9</button>
            <button onClick={clickHandlerRightPanel}>4</button>
            <button onClick={clickHandlerRightPanel}>5</button>
            <button onClick={clickHandlerRightPanel}>6</button>
            <button onClick={clickHandlerRightPanel}>1</button>
            <button onClick={clickHandlerRightPanel}>2</button>
            <button onClick={clickHandlerRightPanel}>3</button>
            <button onClick={clickHandlerRightPanel}>0</button>
            <button>.</button>
            <button onClick={clearRight}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{total}</p>
        </div>
    </div>
  )
}

export default App
