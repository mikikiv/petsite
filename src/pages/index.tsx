import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import PetCard from "../components/PetCard";
import { petsData } from "../data/pets";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section>
          <div className="m-4 flex flex-wrap justify-center">
            {petsData
              .filter((pet) => {
                return !pet.death;
              })
              .map((pet) => {
                return (
                  <PetCard
                    key={pet.name}
                    name={pet.name}
                    breed={pet.breed}
                    birthday={pet.birthday}
                    footer={pet.feeding.amount}
                    href={pet.link}
                    image={pet.image}
                    death={pet.death}
                  >
                    <>
                      Most favorite things:
                      <ul>
                        {pet.favoriteThings.map((thing) => (
                          <li className="capitalize" key={thing}>
                            {thing}
                          </li>
                        ))}
                      </ul>
                    </>
                  </PetCard>
                );
              })}
          </div>
          <hr />
        </section>
      </main>
    </Layout>
  );
}
