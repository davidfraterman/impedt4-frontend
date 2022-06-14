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
        setBedrijven(res.data);
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
        <input type="text" className={styles.inspectieInput}/>
        </section>

      <section className={styles.inspectieList}>
        <h1 className={styles.inspectieInputTitel}>Locatie</h1>
        <select className={styles.inspectieSelect}>
          <option>Eindhoven</option>
        </select>
      </section>

      <section className={styles.inspectieList}>
        <h1 className={styles.inspectieInputTitel}>Naam inspecteur</h1>
        <input type="text" className={styles.inspectieInput}/>
      </section>

      <Link to="/">
          <button className={styles.inspectieSubmitButton}>Submit</button>
        </Link>

    </section>
  );

}

export default Inspectie;