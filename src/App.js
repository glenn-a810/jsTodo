import React, { useCallback, useState } from 'react'
import './App.css'
import Lists from './components/Lists'
import Form from './components/Form'

const initialTodoData = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : []

function App() {
  const [todoData, setTodoData] = useState(initialTodoData)
  const [value, setValue] = useState('')

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id)
      setTodoData(newTodoData)
      localStorage.setItem('todoData', JSON.stringify(newTodoData))
    },
    [todoData]
  )

  const handleRemoveAll = () => {
    setTodoData([])
    localStorage.setItem('todoData', JSON.stringify([]))
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveAll}>모두 삭제</button>
        </div>
        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form
          value={value}
          setValue={setValue}
          setTodoData={setTodoData}
          todoData={todoData}
        />
      </div>
    </div>
  )
}

export default App
