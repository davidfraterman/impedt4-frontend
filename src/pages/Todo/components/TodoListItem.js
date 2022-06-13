import React from 'react';
import styles from '../Todo.module.css'

const TodoListItem = (props) => {
  return (
    <tr>
      <td>{props.category}</td>
      <td>{props.riskindicator}</td>
    </tr>
  );
}

export default TodoListItem;