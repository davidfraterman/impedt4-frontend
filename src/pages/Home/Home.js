import React from 'react';

import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <article className={styles.container}>
                <h1>Home</h1>
                <p>Welkom terug.</p>
                <p>Gebruik het menu rechtsboven om door de applicatie te navigeren.</p>
            </article>
        </>
    );
}

export default Home;