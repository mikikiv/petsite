import React from 'react'
import styles from '@site/src/components/styles.module.css'
import Link from '@docusaurus/Link'

/* children is where the content of the body goes */
export default function PetCard({
  name,
  children,
  breed,
  birthday,
  href,
  image: imagePath,
  footer,
  death,
}: {
  name: string
  children: React.ReactNode
  breed?: string
  birthday?: string
  href?: string
  image?: string
  footer?: React.ReactNode
  death?: Date
}) {
  function getAge(dateString: string) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    if (death) {
      death = new Date(death)
      var deathAge = death.getFullYear() - birthDate.getFullYear() - 1
      return deathAge + ' years (d. ' + death.getFullYear() + ')'
    }
    return age + ' years old'
  }

  return (
    <Link className={styles.petCard} href={href}>
      <div className={styles.box}>
        <div className="card">
          {imagePath != null && (
            <div className={styles.imageContainer}>
              <img className={styles.imageStyle} src={imagePath} />
            </div>
          )}
          <div className="card__body">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h2>{name}</h2>
              {breed && (
                <p
                  style={{
                    marginBottom: '0px',
                    marginTop: '5px',
                    float: 'right',
                  }}
                >
                  <span>{breed}</span>
                </p>
              )}
            </div>
            {birthday && (
              <p style={{ textAlign: 'right', marginTop: '-15px' }}>
                {getAge(birthday)}
              </p>
            )}
            <div>{children}</div>
            {footer && (
              <div
                className="card__footer"
                style={{ borderTop: '1px solid white' }}
              >
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
