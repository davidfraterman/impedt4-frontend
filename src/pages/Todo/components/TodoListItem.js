import React from 'react';
import styles from '../Todo.module.css'
import * as ROUTES from "../../../constants/routes";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const TodoListItem = (props) => {
  

  return (
    <tr>
      <td>
        <Link to={ROUTES.INSPECTIE.replace(':id', props.id)}>
          <Icon icon="fluent:add-square-24-filled" color="black" height="30" />
        </Link>
      </td>
      <td>{props.category}</td>
      <td className={styles.tableNumber}>{props.riskindicator}</td>
    </tr>
  );
}

export default TodoListItem;