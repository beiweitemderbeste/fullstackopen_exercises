const Sum = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return (
    <div>
      <h4>total of {total} exercises</h4>
    </div>
  )
}

export default Sum