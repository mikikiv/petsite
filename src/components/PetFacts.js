import React from 'react';
import PetCard from './PetCard';
import styles from '@site/src/pages/index.module.css'


export default function PetFacts({ cj, olympia, scout, children }) {


    return <div className={styles.homeContainer}>
        <PetCard name="Olympia" href="/docs/pets/olympia" imagePath="/img/olympia.jpg" breed="" age="">
        {children}
            <ul>
                {olympia.map((object) => <li>{object}</li>)}
            </ul>
        </PetCard>

        <PetCard name="Scout" href="/docs/pets/scout" imagePath="/img/scout.jpg" breed="" age="">
        {children}
            <ul>    
                {scout.map((object) => <li>{object}</li>)}
            </ul>
        </PetCard>
        
        <PetCard name="CJ" href="/docs/pets/cj" imagePath="/img/cj.png" breed="" age="">
        {children}
            <ul>
                {cj.map((object) => <li>{object}</li>)}
            </ul>
        </PetCard>
        </div>  
}