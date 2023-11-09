 
import { useState } from 'react';
import './App.css'
import InputField from './component/InputField';
import { Todo } from './model';

function App() {

 const [todo,setTodo] =useState<string>("");

 const [todos, settodos] = useState<Todo[]>([]);
 const handleAdd=(e:React.FormEvent)=>{
  e.preventDefault();
   if(todo){
     settodos([...todos,{id:Date.now(),todo,isDone:false}]);
     setTodo("");
    }
  };
  
  console.log(todo);


  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
  <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App
