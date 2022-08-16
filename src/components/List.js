import React from 'react'

const List = ({ todoData, setTodoData }) => {
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  }

  const handleCompletedChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(newTodoData)
  }

  const listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    }
  }

  return (
    <div>
      {todoData.map((data) => (
        <div style={listStyle(data.completed)} key={data.id}>
          <input
            type="checkbox"
            onChange={() => handleCompletedChange(data.id)}
            defaultChecked={false}
          />
          {data.title}
          <button onClick={() => handleClick(data.id)} style={btnStyle}>
            X
          </button>
        </div>
      ))}
    </div>
  )
}

export default List
