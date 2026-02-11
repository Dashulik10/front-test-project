import DestinationHeader from "./DestinationsHeader/DestinationsHeader.tsx";
import DestinationCard from "./DestinationCard/DestinationCard.tsx";
import styles from './Destinations.module.css'
import {destinationsList} from "./destinations.data.tsx";

const Destinations = () => {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <div className={styles.headerWrapper}>
                    <DestinationHeader
                        title="Popular Destination"
                        subtitle="Unleash Your Wanderlust With Sky Wings."
                    />
                </div>

                <div className={styles.cardsGrid}>
                    {destinationsList.map((item) => (
                        <DestinationCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            location={item.location}
                            rating={item.rating}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
};

export default Destinations;