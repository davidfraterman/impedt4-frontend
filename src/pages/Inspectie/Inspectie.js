import React from 'react';
import { Icon } from '@iconify/react';
import styles from './Inspectie.module.css';

import axios from 'axios';

const Inspectie = () => {


return (
    <section className={styles.inspectieContainer}>
      <section className={styles.inspectieTitleWrapper}>
        <Icon icon="bi:bar-chart-fill" color="black" height="30" />
        <h1 className={styles.inspectieTitle}>Mijn Inspecties</h1>
      </section>
      <section className={styles.inspectieList}>
      </section>
    </section>
  );

}

export default Inspectie;