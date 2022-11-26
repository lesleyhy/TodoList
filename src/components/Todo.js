const Todo = (props) =>{
    const todoClasses = [];
    if(props.todo.complete){
      todoClasses.push("line-through");
    }
    return <div key={props.i}>
    <p className= {todoClasses.join(" ")}>{props.todo.text}</p>

    <input onChange={(e) => {
      props.handleCheck(props.i);
    }} check={props.todo.complete} type="checkbox" />
    <button onClick={(e)=>{
      props.todoDelete(props.i);
    }}>Delete</button>
  </div>
}

export default Todo;