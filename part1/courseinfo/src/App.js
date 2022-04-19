const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


const Part = (props) => {
  return (
    <p key={props.name}>
      {props.name} {props.numExercises}
    </p>
  )
}


const Content = (props) => {
  return (
    <>
      {props.parts.map((p) => {
        return (
          <Part key={p.name} name={p.name} numExercises={p.numExercises} />
        )
      })}
    </>
  )
}


const Total = (props) => {
  let total = props.parts.map((p) => p.numExercises)
    .reduce((prev, curr) => prev + curr)


  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const createPart = (name, numExercises) => {
    return { name: name, numExercises: numExercises }
  }

  const parts = [
    createPart('Fundamentals of React', 10),
    createPart('Using props to pass data', 7),
    createPart('State of a component', 14),
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App