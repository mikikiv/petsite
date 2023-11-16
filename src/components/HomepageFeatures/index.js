import React from 'react';
import clsx from 'clsx';
import styles from '../styles.module.css';
import AllPets from '../AllPets';
import PetFacts from '../PetFacts'

const FeatureList = [
  {
    title: 'CJ',
    image: '/img/cj.png',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Olympia',
    image: '/img/olympia.jpg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Scout',
    image: '/img/scout.jpg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
]

// not being used
function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

//used to keep page formatting on homepage
export default function HomepageFeatures() {
  return (
    <>
      <div className="row">
        <PetFacts
          cj={['Walks', 'Treats', 'Sniffing', 'Car rides']}
          olympia={['Making noises', 'Cuddling', 'Running fast']}
          scout={['Chasing zipties', 'Sleeping', 'Eating', 'Open doors']}
        >
          Most Favorite things:
        </PetFacts>
      </div>
    </>
  )
}
