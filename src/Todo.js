import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { TextField } from "@material-ui/core";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form>
          <center>
            <div className={classes.paper} c id="update-todo">
              <h1>Lets update your <br/> todo 😊</h1>
              {/* <input
                placeholder={props.todo.todo}
                value={input}
                onChange={(event) => setInput(event.target.value)} */}
              <TextField
                id="outlined-basic"
                label="Write a update for your todo"
                variant="outlined"
                placeholder={props.todo.todo}
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                disabled={!input}
                type="submit"
                onClick={updateTodo}
                className="update-button"
                variant="contained"
                color="primary"
              >
                Update todo{" "}
              </Button>
            </div>
          </center>
        </form>
      </Modal>{" "}
      <div className="list-container">
        <list className="todo-list">
          <ListItem className="todo-list-item">
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Inprogress ⏰" />
          </ListItem>
          <button
            onClick={(e) => setOpen(true)}
            className="edit-button"
            // variant="contained"
            // color="primary"
          >
            Edit
          </button>
          {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}></Button> */}
          {/* <Button variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
          Delete
        </Button> */}
          <DeleteForeverIcon
            className="delete-button"
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          />
        </list>
      </div>
    </>
  );
}
