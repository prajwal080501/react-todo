import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
export default function Todo(props) {
  return (
    <div className="list-container">
      <list className="todo-list">
        <ListItem className="todo-list-item">
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Inprogress ⏰" />
        </ListItem>
        {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}></Button> */}
        <Button variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
          Delete
        </Button>
      </list>
    </div>
  );
}
