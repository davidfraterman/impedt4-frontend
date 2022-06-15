import React from 'react';
import { Icon } from '@iconify/react';
import styles from './Inspectie.module.css';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Inspectie = (props) => {

  const { companies } = props;

  const [bedrijven, setBedrijven] = React.useState([]);
  // useffect
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/bedrijven')
      .then(res => {
        setBedrijven([]);
        setBedrijven(res.data);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

return (
    <section className={styles.inspectieContainer}>
      <section className={styles.inspectieTitleWrapper}>
        <Icon icon="ant-design:plus-circle-filled" color="black" height="30" />
        <h1 className={styles.inspectieTitle}>Nieuwe Record</h1>
      </section>

      <section className={styles.inspectieList}>
        <h1 className={styles.inspectieInputTitel}>Bedrijfsnaam</h1>         
        <h1 className={styles.inspectieInput}> </h1>
        </section>

      <section className={styles.inspectieList}>
        <label htmlFor="locatie" className={styles.inspectieInputTitel}>Locatie</label>
        <select id="locatie" className={styles.inspectieSelect}>
          <option>Eindhoven</option>
        </select>
      </section>

      <section className={styles.inspectieList}>
        <label htmlFor="name" className={styles.inspectieInputTitel}>Naam inspecteur</label>
        <input id="name" type="text" className={styles.inspectieInput}/>
      </section>

      <Link to="/">
          <button className={styles.inspectieSubmitButton}>Submit</button>
        </Link>

    </section>
  );

}

export default Inspectie;