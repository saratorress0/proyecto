import { useState } from 'react'

// Componente Button para los botones
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// Componente StatisticLine para una estadística individual
const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

// Componente Statistics que usa varios StatisticLine
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(good - bad) / total} />
      <StatisticLine text="positive" value={`${(good / total) * 100} %`} />
    </div>
  )
}

// Componente principal
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
