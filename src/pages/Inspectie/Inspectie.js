import React from 'react';
import { Icon } from '@iconify/react';
import styles from './Inspectie.module.css';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import axios from 'axios';

const Inspectie = (props) => {

  const [bedrijven, setBedrijven] = React.useState([]);
  const { id } = useParams();

  // useffect
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/bedrijven')
      .then(res => {
        setBedrijven([]);
        setBedrijven(res.data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  const addToplan = (id, e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/addToplan', { id: id })
      .then(function (response) {
        console.log(response.data);
        window.location.href = "http://localhost:3000/kaart";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className={styles.inspectieContainer}>
      <form className={styles.inspectieContainerForm} onSubmit={addToplan.bind(this, id)}>

        <section className={styles.inspectieTitleWrapper}>
          <Icon icon="ant-design:plus-circle-filled" color="black" height="30" />
          <h1 className={styles.inspectieTitle}>Nieuwe Record</h1>
        </section>

        <section className={styles.inspectieList}>
          <label className={styles.inspectieInputTitel}>Bedrijfsnaam</label>
          <h1 className={styles.inspectieInputId}> Bedrijf {id} </h1>
        </section>

        <section className={styles.inspectieList}>
          <label htmlFor="locatie" className={styles.inspectieInputTitel}>Locatie</label>
          <select id="locatie" className={styles.inspectieSelect}>
            <option>Eindhoven</option>
          </select>
        </section>

        <section className={styles.inspectieList}>
          <label htmlFor="name" className={styles.inspectieInputTitel}>Naam inspecteur</label>
          <input id="name" type="text" className={styles.inspectieInput} />
        </section>

        <button type="submit">Submit</button>

      </form>

    </section>
  );

}

export default Inspectie;