import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import PetCard from '../components/PetCard'
import { petsData } from '../data/pets'

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
          <div className={'container'}>
            <div className={styles.homeContainer}>
              {petsData
                .filter((pet) => {
                  return !pet.death
                })
                .map((pet) => {
                  return (
                    <PetCard
                      name={pet.name}
                      breed={pet.breed}
                      birthday={pet.birthday}
                      footer={pet.feeding.amount}
                      key={pet.name}
                      href={pet.link ?? null}
                      image={pet.image ?? null}
                      death={pet.death}
                    >
                      <>
                        Most favorite things:
                        <ul>
                          {pet.favoriteThings.map((thing) => (
                            <li key={thing}>{thing}</li>
                          ))}
                        </ul>
                      </>
                    </PetCard>
                  )
                })}
            </div>
            <div
              className="container narrow"
              style={{
                marginTop: '2rem',
                marginBottom: '2rem',
                padding: '1rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: 'max-content',
              }}
            >
              <h3>Basic rules</h3>
              <div>
                <ol>
                  <li>
                    Don't let Scoutie outside{' '}
                    <i className="fa-solid fa-cat"></i>
                  </li>
                  <li>
                    Make sure Scoutie can access her litterbox{' '}
                    <i className="fa-solid fa-poo"></i>
                  </li>
                  <li>
                    Don't let the dogs have access Scoutie's litterbox{' '}
                    <i className="fa-solid fa-poop"></i>
                  </li>
                  <li>
                    Keep CJs heart rate down{' '}
                    <i className="fa-solid fa-heart"></i>
                  </li>
                  <li>
                    Don't leave alone longer than 6 hours{' '}
                    <i className="fa-solid fa-clock"></i>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
