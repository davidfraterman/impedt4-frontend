import React from 'react';
import TodoList from './components/TodoList'
import { Icon } from '@iconify/react';
import styles from './Todo.module.css';
import { Link } from 'react-router-dom';
import Spinner from '../../components/layout/Spinner';

import * as ROUTES from "../../constants/routes";

import axios from 'axios';

const Todo = () => {

  const [bedrijven, setBedrijven] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  // useffect
  React.useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:8000/api/bedrijven')
      .then(res => {
    
        // filter where todo = 1
        const bedrijven = res.data.filter(company => {
          return company.todo === 1
        });

        setBedrijven(bedrijven);
        setIsLoading(false);

      }).catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const amountOfTodo = () => {
    let amount = 0;
    bedrijven.map(company => {
      if (company.todo === 1) {
        amount++;
      }
    });
    return amount;
  }

  return (
    <section className={styles.todoContainer}>

      <Link to={ROUTES.KAART}>
        <section className={styles.todoMapBtn}>
          <Icon icon="akar-icons:arrow-back" color="var(--clr-main)" height="30" />
        </section>
      </Link>

      <section className={styles.todoTitleWrapper}>
        <section className={styles.todoTitleLeft}>
          <Icon icon="fa6-solid:car-side" color="black" height="30" />
          <h1 className={styles.todoTitle}>To do</h1>
        </section>
        <section className={styles.todoTitleRight}>
          ({amountOfTodo()})
        </section>
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
        {
          (bedrijven.length === 0 && isLoading === false) &&
          <section className={styles.noTodo}>
            Er zijn nog geen bedrijven in de todo lijst.
          </section>
        }
        {
          (bedrijven.length === 0 && isLoading === true) &&
          <section className={styles.spinnerWrapper}>
            <Spinner />
          </section>
        }
      </section>
    </section>
  );
}

export default Todo;