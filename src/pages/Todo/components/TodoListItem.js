import React from 'react';
import styles from '../Todo.module.css'
import * as ROUTES from "../../../constants/routes";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const TodoListItem = (props) => {
  return (
    <tr>
      <td>
        <Link to={ROUTES.HOME}>
          <Icon className={styles.addIcon} icon="bi:plus-square" color="var(--clr-main)" height="25" />
        </Link>
      </td>
      <td>{props.category}</td>
      <td className={styles.tableNumber}>{props.riskindicator}</td>
    </tr>
  );
}

export default TodoListItem;