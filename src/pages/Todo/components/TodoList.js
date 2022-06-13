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
          <th>Risk Indicator</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(company => {
          return (
            <TodoListItem key={company.id} category={company.category} riskindicator={company.riskindicator} />
          )
        })}
      </tbody>
    </table>
  );
}

export default TodoList;