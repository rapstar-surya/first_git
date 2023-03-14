import React, { useEffect, useState } from 'react'
import './Todo.css';

export default function Todo(props) {

  const [count, setCount] = useState(0)
  const [str, setStr] = useState('')

  // function increase (){
  //    setCount(count+1)
  // }

  function storeValue(e) {
    return setStr(e.target.value)

  }
  return (
    <div className='box'>
      <h1>Pending task ({count})</h1>
      <div className='btn'>
        <p className='l'>{str}
          <div className='r'>
            <button >Complete</button>
            <button >x</button>
          </div>
        </p>
      </div>
      <br />
      <input onChange={storeValue} placeholder='Add a new task' value={str}>

      </input>
      <button onClick={() => {
        props.addList(str)
        setStr("")
      }}>Add</button>

    </div>
  )
}
