import React from 'react';
import styles from '@site/src/components/styles.module.css';


/* children is where the content of the body goes */
export default function PetCard({ name, href, imagePath, children, breed, age }) {
    return <a className={styles.petCard} href={href}><div className={styles.box} > 
            <h1 className={styles.petName}>{name}</h1>
            <div style={{flex:'6', marginTop: '-.2em'}}>
                <span className="pagination-nav__sublabel">
                    {breed.length > 0 && <span>{breed} | </span>} {age}</span>
                <div style={{paddingTop:'.5em'}}>{children}</div>
                {/* button doesn't do anything for now <button>{successMessage}?</button> */}
            </div>
            {imagePath.length > 0 && 
                <div className={styles.imageContainer}>
                    <img className={styles.imageStyle} src={imagePath} />
                </div>
            }
            
        </div>
    </a>
}