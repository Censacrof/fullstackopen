const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
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
      {props.course.parts.map((p) => {
        return (
          <Part key={p.name} name={p.name} numExercises={p.numExercises} />
        )
      })}
    </>
  )
}


const Total = (props) => {
  let total = props.course.parts.map((p) => p.numExercises)
    .reduce((prev, curr) => prev + curr)


  return (
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const createPartProp = (name, numExercises) => {
    return { name: name, numExercises: numExercises }
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      createPartProp('Fundamentals of React', 10),
      createPartProp('Using props to pass data', 7),
      createPartProp('State of a component', 14),
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App