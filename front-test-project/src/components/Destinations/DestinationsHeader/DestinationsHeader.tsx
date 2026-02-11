import styles from './DestinationsHeader.module.css'
import type {ReactNode} from "react";
import ControlButton from "../../ui/controlButton/controlButton.tsx";

interface Props {
    title: ReactNode;
    subtitle: ReactNode;
};

const DestinationHeader = ({title, subtitle}: Props) => {
    return (
        <div className={styles.container}>

            <div className={styles.textBlock}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>

            <div className={styles.controlsBlock}>
                <ControlButton direction="prev" />
                <ControlButton direction="next" />
            </div>
        </div>
    )
}

export default DestinationHeader;