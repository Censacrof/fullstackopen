import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const StatisticsLine = (props) => {
  return (
    <p>{props.text} {props.value} {props.unit}</p>
  )
}

const Statistics = (props) => {
  const nRatings = props.good + props.neutral + props.bad
  const score = props.good - props.bad
  const average = score / nRatings
  const postivePercentage = 100 * props.good / nRatings

  return (
    <div>
      <h2>Statistics</h2>

      {
        nRatings > 0
        ? (
            <>
              <StatisticsLine text="good" value={props.good} />
              <StatisticsLine text="neutral" value={props.neutral} />
              <StatisticsLine text="bad" value={props.bad} />
              <StatisticsLine text="all" value={nRatings} />
              <StatisticsLine text="average" value={average} />
              <StatisticsLine text="positive" value={postivePercentage} unit="%" />
            </>
        )
        : <p>No feedback given</p>
      }

      
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