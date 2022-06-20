import React from 'react';
import axios from 'axios';
import styles from './Home.module.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Home = () => {

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

    const getAmountOfTodo = () => {
        let amount = 0;
        bedrijven.map(company => {
            if (company.todo === 1) {
                amount++;
            }
        });
        return amount;
    }

    const getAmountOfCompanies = () => {
        let amount = 0;
        bedrijven.map(company => {
            if (company.relevant === 1) {
                amount++;
            }
        });
        return amount;
    }

    const getAmountOfRelevantCompanies = () => {
        let amount = 0;
        bedrijven.map(company => {
            if (company.relevant === 1 && company.gepland === 1) {
                amount++;
            }
        });
        return amount;
    }

    const getAmountOfCheckedCompanies = () => {
        let amount = 0;
        bedrijven.map(company => {
            if (company.relevant === 1 && company.gepland === 1 && company.todo === 0 && company.plan === 1) {
                amount++;
            }
        });
        return amount;
    }

    return (
        <>
            <article className={styles.container}>
                <h1 className={styles.title}>
                    <Icon icon="ant-design:home-filled" color="var(--clr-black)" height="30" />
                    Home
                </h1>

                <section className={styles.mijnOverzichtContainer}>
                    <h2>Mijn overzicht</h2>
                    <section className={styles.mijnOverzichtData}>
                        <p>Aantal Relevant</p>
                        <p className={styles.mijnOverzichtDatapoint}>
                            {getAmountOfCompanies()}
                        </p>
                    </section>
                    <section className={styles.mijnOverzichtData}>
                        <p>Controleerbare bedrijven</p>
                        <p className={styles.mijnOverzichtDatapoint}>
                            {getAmountOfRelevantCompanies()}
                        </p>
                    </section>
                    <section className={styles.mijnOverzichtData}>
                        <p>Aantal To-do's</p>
                        <p className={styles.mijnOverzichtDatapoint}>
                            {getAmountOfTodo()}
                        </p>
                    </section>
                    <section className={styles.mijnOverzichtData}>
                        <p>Aantal Gecontroleerd</p>
                        <p className={styles.mijnOverzichtDatapoint}>
                            {getAmountOfCheckedCompanies()}
                        </p>
                    </section>

                    <Link to={ROUTES.KAART} className={styles.uTextDecNone}>
                        <button className={styles.toMapBtn}>
                            Naar de kaart
                            <Icon icon="carbon:arrow-right" color="var(--clr-main)" height="25" />
                        </button>
                    </Link>
                </section>

            </article>
        </>
    );
}

export default Home;