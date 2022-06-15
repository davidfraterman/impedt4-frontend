import React from 'react';
import styles from '../Todo.module.css'
import * as ROUTES from "../../../constants/routes";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const TodoListItem = (props) => {

  return (
    <tr>
      <td>{props.category}</td>
      <td className={styles.tableNumber}>{props.riskindicator}</td>
      <td>
        <Link to={ROUTES.INSPECTIE.replace(':id', props.id)}>
          <Icon className={styles.addInspectionIcon} icon="bi:clipboard-plus" color="black" height="30" />
        </Link>
      </td>
    </tr>
  );
}

export default TodoListItem;