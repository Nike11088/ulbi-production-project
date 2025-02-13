import React, { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)   

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>  
  )  
}

export default Counter