import type {ReactNode} from "react";
import styles from "./TextBlock.module.css"

interface Props {
    smallText: ReactNode;
    bigText: ReactNode;
}

const TextBlock = ({smallText, bigText}: Props) => {
    return (
        <div className={styles.textBlock}>
            <h1 className={styles.h1}>{bigText}</h1>
            <p className={styles.p}>{smallText}</p>
        </div>
    )
};

export default TextBlock;