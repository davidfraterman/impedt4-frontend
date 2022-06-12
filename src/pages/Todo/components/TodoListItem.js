import React from 'react';
import styles from '../Todo.module.css'

const TodoListItem = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.address}</td>
    </tr>
  );
}

export default TodoListItem;