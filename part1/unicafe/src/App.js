import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increase = (val, setVal) => {
    setVal(val + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" onClick={() => increase(good, setGood)} />
      <Button text="Neutral" onClick={() => increase(neutral, setNeutral)} />
      <Button text="Bad" onClick={() => increase(bad, setBad)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App