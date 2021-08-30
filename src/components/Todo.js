import {List,  ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

export default function Todo(props) {
  return (
      <div className="list-container">
        <list className="todo-list">
              <ListItem className="todo-list-item">
                  <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={props.text} secondary="Inprogress ⏰" />
          </ListItem>
        </list>
      </div>
  );
}
