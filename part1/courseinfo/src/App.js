const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {

  const part1 = props.course.parts[0].name
  const part2 = props.course.parts[1].name
  const part3 = props.course.parts[2].name

  const exercises1 = props.course.parts[0].exercises
  const exercises2 = props.course.parts[1].exercises
  const exercises3 = props.course.parts[2].exercises

  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

const Total = (props) => {
  const exercises = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises

  return (
    <div>
      <p>
        Number of exercises {exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
