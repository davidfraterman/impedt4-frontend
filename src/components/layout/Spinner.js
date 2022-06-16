import React from "react";
import styles from './Spinner.module.css'

const Spinner = () => {

  return (
    <section className={styles.loader}>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </section>
  )
}

export default Spinner;