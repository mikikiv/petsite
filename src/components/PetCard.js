import React from 'react'
import styles from '@site/src/components/styles.module.css'
import Link from '@docusaurus/Link'

/* children is where the content of the body goes */
export default function PetCard({ name, href, imagePath, children, breed, birthday }) {
  function getAge(dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age + ' years old'
  }

  return (
    <Link className={styles.petCard} href={href}>
      <div className={styles.box}>
        <div className="card">
          {imagePath.length > 0 && (
            <div className={styles.imageContainer}>
              <img className={styles.imageStyle} src={imagePath} />
            </div>
          )}
          <div className="card__body">
            <small style={{ float: 'right' }}>
              {breed.length > 0 && <span>{breed} | </span>} {getAge(birthday)}
            </small>
            <h3 className="">{name}</h3>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
