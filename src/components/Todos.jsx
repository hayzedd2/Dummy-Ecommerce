import { useState, useEffect } from "react";


const url = `https://dummyjson.com/todos`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState([]);
  const FetchTodos = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      setTodos(data.todos);
      console.log(data.todos);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    FetchTodos();
  }, []);
  return (
    <div>
      <div  className="comments-container">
       {todos.map((com , index) => {
         return (
           <div key={index}>
            <div className="comments">
             <p>{com.id}</p>
             <h4>{com.todo}</h4>
             <h3>Completed : {com.completed ? 'True' : 'False'}</h3>
            </div>
           </div>
         );
       })}
     </div>
    </div>
   );
}
