import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FiEdit onClick={()=> editTodo(task.id)} className='edit-icon'/>
        <FaTrash onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo