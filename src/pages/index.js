import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import AllPets from '../components/AllPets';
import HomepageFeatures from '../components/HomepageFeatures/index.js'


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/pets">
            Find what you need, click here
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <HomepageFeatures />

            <h3>Basic rules</h3>
            <div>
              <ol>
                <li>
                  Don't let Scoutie outside <i class="fa-solid fa-cat"></i>
                </li>
                <li>
                  Make sure Scoutie can access her litterbox{' '}
                  <i class="fa-solid fa-poo"></i>
                </li>
                <li>
                  Don't let the dogs have access Scoutie's litterbox{' '}
                  <i class="fa-solid fa-poop"></i>
                </li>
                <li>
                  Keep CJs heart rate down <i class="fa-solid fa-heart"></i>
                </li>
              </ol>
            </div>
             
          </div>
        </section>
      </main>
    </Layout>
  )
}
