import React from 'react';
import PetCard from './PetCard';
import styles from '@site/src/pages/index.module.css'


export default function PetFacts({ cj, olympia, scout, children }) {

    const pets = {
      olympia: '2019/09/10',
      cj: '2011/07/10',
      scout: '2016/05/14',
    }

    return (
      <div className={styles.homeContainer}>
        <PetCard
          name="Olympia"
          href="/docs/pets/olympia"
          imagePath="/img/olympia.jpg"
          breed=""
          birthday={pets.olympia}
        >
          {children}
          <ul>
            {olympia.map((object) => (
              <li>{object}</li>
            ))}
          </ul>
        </PetCard>

        <PetCard
          name="Scout"
          href="/docs/pets/scout"
          imagePath="/img/scout.jpg"
          breed=""
          birthday={pets.scout}
        >
          {children}
          <ul>
            {scout.map((object) => (
              <li>{object}</li>
            ))}
          </ul>
        </PetCard>

        <PetCard
          name="CJ"
          href="/docs/pets/cj"
          imagePath="/img/cj.png"
          breed=""
          birthday={pets.cj}
        >
          {children}
          <ul>
            {cj.map((object) => (
              <li>{object}</li>
            ))}
          </ul>
        </PetCard>
      </div>
    )  
}