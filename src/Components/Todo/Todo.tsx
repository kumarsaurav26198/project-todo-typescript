import React, {useState } from 'react'

const Todo = () => {
    const [ todo, setTodo ] = useState( "" );
    const [ todoList, setTodoList ] = useState<string[]>( [] );
    
    const addTodo = () => {
        setTodoList( [ ...todoList, todo ] )
        setTodo("")
    }
    
    
  return (
      <div>
          <input type="text" value={ todo } onChange={ ( e ) => setTodo( e.target.value ) } placeholder='Type Todo' name="" id="" />
          <button onClick={ addTodo }>Add Todo</button>
          <ul>
              {
                  todoList.map( item => {
                      return <li>{ item}</li>
                  })
              }
          </ul>

    </div>
  )
}

export default Todo