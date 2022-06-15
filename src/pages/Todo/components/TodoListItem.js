import React from 'react';
import styles from '../Todo.module.css'
import { Icon } from '@iconify/react';

const TodoListItem = (props) => {
  return (
    <tr>
      <td><Icon icon="fluent:add-square-24-filled" color="black" height="30" /></td>
      <td>{props.category}</td>
      <td className={styles.tableNumber}>{props.riskindicator}</td>
    </tr>
  );
}

export default TodoListItem;