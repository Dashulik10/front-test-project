import styles from './DestinationCard.module.css'
import locationIcon from '../../../assets/location.svg'
import starIcon from '../../../assets/star.svg'

interface Props {
    image: string;
    title: string;
    location: string;
    rating?: string;
}

const DestinationCard = ({image, title, location, rating}: Props) => {
    return (
        <div className={styles.destinationCard}>

            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image}/>
            </div>

            <div className={styles.info}>

                <div className={styles.textGroup}>
                    <h3 className={styles.title}>{title}</h3>

                    <div className={styles.locationBlock}>
                        <img src={locationIcon} className={styles.pinIcon} alt="location" />
                        <span className={styles.locationText}>{location}</span>
                    </div>
                </div>

                <div className={styles.rating}>
                    <img src={starIcon} className={styles.starIcon} alt="star" />
                    <span>{rating}</span>
                </div>

            </div>
        </div>
    )
}

export default DestinationCard;