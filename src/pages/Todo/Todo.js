import React from 'react';
import TodoList from './components/TodoList'
import { Icon } from '@iconify/react';
import styles from './Todo.module.css';

import axios from 'axios';

const Todo = () => {

  const [bedrijven, setBedrijven] = React.useState([]);
  // useffect
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/bedrijven')
      .then(res => {
        setBedrijven(res.data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className={styles.todoContainer}>
      <section className={styles.todoTitleWrapper}>
        <Icon icon="fa6-solid:car-side" color="black" height="30" />
        <h1 className={styles.todoTitle}>Geplande Lijst</h1>
      </section>
      <section className={styles.todoList}>
        <TodoList companies={
          bedrijven.map(company => {
            return {
              id: company.id,
              category: company.category,
              riskindicator: company.riskindicator,
            }
          })
        } />
      </section>
    </section>
  );
}

export default Todo;