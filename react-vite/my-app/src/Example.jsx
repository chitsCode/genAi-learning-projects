import { useState } from 'react'
function Example( props ) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    alert(`You clicked ${count + 1} times`)
  }
if (props.isloggedIn) {
  return (
    <div>
      Welcome to the Example component!

      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  ) 
} else  {
  return (
    <div>
      Please log in to access the Example component.
    </div>
  )   
}
}

export default Example