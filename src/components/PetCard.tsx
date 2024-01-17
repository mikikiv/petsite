import React from 'react'
import styles from '@site/src/components/styles.module.css'
import Link from '@docusaurus/Link'

/* children is where the content of the body goes */
export default function PetCard({
  name,
  children,
  displayBreed,
  displayAge: displayBirthday,
  href,
  imagePath,
  footer,
}: {
  name: string
  children: React.ReactNode
  displayBreed?: boolean
  displayAge?: boolean
  href?: string
  imagePath?: string
  footer?: React.ReactNode
}) {
  function getAge(dateString: string) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age + ' years old'
  }

  let link = href
  let imageLink = imagePath
  let birthday = ''
  let breed = ''

  if (name == undefined) {
    imageLink = ''
    link = ''
    birthday = ''
    breed = ''
  }
  if (name.toLowerCase() === 'cj') {
    imageLink = '/img/cj.png'
    link = '/docs/pets/cj'
    birthday = '2011/07/10'
    breed = 'German Shepherd'
  }
  if (name.toLowerCase() === 'scout') {
    imageLink = '/img/scout.jpg'
    link = '/docs/pets/scout'
    birthday = '2016/05/04'
    breed = 'cat'
  }
  if (name.toLowerCase() === 'olympia') {
    imageLink = '/img/olympia.jpg'
    link = '/docs/pets/olympia'
    birthday = '2019/09/10'
    breed = 'Basenji Mix'
  }

  return (
    <Link className={styles.petCard} href={link} data-pet={name}>
      <div className={styles.box}>
        <div className="card">
          {imageLink !== undefined && (
            <div className={styles.imageContainer}>
              <img className={styles.imageStyle} src={imageLink} />
            </div>
          )}
          <div className="card__body">
            <small
              style={{
                float: 'right',
                marginTop: '5px',
                marginBottom: '5px',
              }}
            >
              {displayBreed == true && <span>{breed}</span>}
              {displayBreed == true && displayBirthday == true && (
                <span> | </span>
              )}
              {displayBirthday == true && getAge(birthday)}
            </small>
            <h3 className="">{name}</h3>
            <div>{children}</div>
            {footer ? (
              <div
                className="card__footer"
                style={{ borderTop: '1px solid white' }}
              >
                {footer}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
