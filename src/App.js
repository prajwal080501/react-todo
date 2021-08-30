import "./App.css";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Todo from './components/Todo';
import { useEffect } from "react";
import db from "./firebase"
import firebase from "firebase"

function App() {
  const [todos, setTodos] = useState([""]);
  const [input, setInput] = useState("");

  //when the app loads we need load database as we add a new todos added.
  useEffect(() => {
    //This code fires when the app loads.
    db.collection('todos').orderBy('timeStamp', 'desc'
    ).onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    });
  }, []);

  const addTodo = (event) => {
    // This will fireup when we click button
    event.preventDefault();// Thsi will avoid page refreshing after hitting enter button  when adding a new todo.
    db.collection("todos").add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })  

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <form>
        <center>
          <h1>Todos App</h1>
          {/* <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          /> */}
          <TextField id="outlined-basic" label="Write a todos" variant="outlined" value={input}
            onChange={(event) => setInput(event.target.value)}/>

          <Button
            disabled={!input}
            className="mx-5"
            variant="contained"
            type="submit"
            onClick={addTodo}
            color="primary"
          >
            Add todo
          </Button>
        </center>
      </form>
      <center>
        {" "}
        <ul>
          {todos.map((todo) => (
            <Todo text={todo}/>
          ))}
        </ul>
      </center>
    </div>
  );
}

export default App;
