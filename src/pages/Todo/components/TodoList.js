import React from 'react';
import styles from '../Todo.module.css';
import TodoListItem from './TodoListItem'

const TodoList = (props) => {

  const { companies } = props;

  return (
    <table className={styles.todoListTable}>
      <thead>
        <tr>
          <th>Bedrijf</th>
          <th className={styles.tableNumber}>Risk Indicator</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {companies.map(company => {
          return (
            <TodoListItem key={company.id} id={company.id} category={'Bedrijf ' + company.id} riskindicator={company.riskindicator} />
          )
        })}
      </tbody>
    </table>
  );
}

export default TodoList;