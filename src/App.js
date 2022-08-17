import React, { useState } from 'react'
import './App.css'
import List from './components/List'
import Input from './components/Input'

export default function App() {
  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState('')

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Input value={value} setValue={setValue} setTodoData={setTodoData} />
      </div>
    </div>
  )
}
