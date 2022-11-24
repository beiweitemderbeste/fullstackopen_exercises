const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {

  const part1 = props.parts[0].name
  const part2 = props.parts[1].name
  const part3 = props.parts[2].name

  const exercises1 = props.parts[0].exercises
  const exercises2 = props.parts[1].exercises
  const exercises3 = props.parts[2].exercises

  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
}

const Total = (props) => {
  const exercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <div>
      <p>
        Number of exercises {exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
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
