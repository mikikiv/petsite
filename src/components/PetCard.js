import React from 'react'
import styles from '@site/src/components/styles.module.css'

/* children is where the content of the body goes */
export default function PetCard({
	name,
	href,
	imagePath,
	children,
	breed,
	age,
}) {
	return (
		<a className={styles.petCard} href={href}>
			<div className={styles.box}>
				<div className='card'>
					{imagePath.length > 0 && (
						<div className={styles.imageContainer}>
							<img className={styles.imageStyle} src={imagePath} />
						</div>
					)}
					<div className='card__body'>
						<h3 className=''>{name}</h3>
						<div>{children}</div>
						<small className='card__footer'>
							{breed.length > 0 && <span>{breed} | </span>} {age}
						</small>
					</div>
				</div>
			</div>
		</a>
	)
}
