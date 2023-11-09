import React from 'react'
import  './style.css'

interface Props{
todo:string;
setTodo:React.Dispatch<React.SetStateAction<string>>;
handleAdd : (e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd} ) => {

  return (
    <form className='input' onSubmit={handleAdd}>
<input type='input' placeholder='Enter a task' className='input__box'
value={todo}
onChange={(e)=>setTodo(e.currentTarget.value)} ></input>
<button className='input__submit' type='submit' >Go</button>

    </form>
  )
}

export default InputField