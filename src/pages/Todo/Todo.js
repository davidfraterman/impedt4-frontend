import React from 'react';
import TodoList from './components/TodoList'
import { Icon } from '@iconify/react';
import styles from './Todo.module.css';

const Todo = () => {

  const companies = [
    {
      id: 1,
      name: 'Company 1',
      address: 'Address 1',
    },
    {
      id: 2,
      name: 'Company 2',
      address: 'Address 2',
    },
    {
      id: 3,
      name: 'Company 3',
      address: 'Address 3',
    },
  ];

  return (
    <section className={styles.todoContainer}>
      <section className={styles.todoTitleWrapper}>
        <Icon icon="fa6-solid:car-side" color="black" height="30" />
        <h1 className={styles.todoTitle}>Geplande Lijst</h1>
      </section>
      <section className={styles.todoList}>
        <TodoList companies={
          companies.map(company => {
            return {
              id: company.id,
              name: company.name,
              address: company.address,
            }
          })
        }/>
      </section>
    </section>
  );
}

export default Todo;