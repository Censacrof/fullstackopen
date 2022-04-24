import { useState } from 'react'


const Anecdote = ({anecdote}) => {
  return (
    <div>
      <p>{anecdote.text}</p>
      <p>has {anecdote.votes} votes</p>
    </div>
  )
}


const App = () => {
  const createAnecdotes = (text) => {
    return {text: text, votes: 0}
  }

  const [anecdotes, setAnecdotes] = useState([
    createAnecdotes('If it hurts, do it more often'),
    createAnecdotes('Adding manpower to a late software project makes it later!'),
    createAnecdotes('The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'),
    createAnecdotes('Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'),
    createAnecdotes('Premature optimization is the root of all evil.'),
    createAnecdotes('Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'),
    createAnecdotes('Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'),
  ])
   
  const [selected, setSelected] = useState(0)

  const [bestAnecdote, setBestAnecdote] = useState(null)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]}/>
      <button onClick={() => {
        let newAnecdotes = [...anecdotes]
        newAnecdotes[selected].votes++;
        setAnecdotes(newAnecdotes)

        if (!bestAnecdote || newAnecdotes[selected].votes > bestAnecdote.votes)
          setBestAnecdote(newAnecdotes[selected])
      }}>vote</button>
      <button onClick={() => {
        if (anecdotes.length <= 1)
          return

        let newIndex
        do 
          newIndex = Math.floor(Math.random() * anecdotes.length)
        while (newIndex === selected)

        setSelected(newIndex)
      }}>Next anecdote</button>

      {bestAnecdote &&
        <>
          <h2>Best anecdote</h2>
          <Anecdote anecdote={bestAnecdote}/>
        </>
      }
    </div>
  )
}

export default App