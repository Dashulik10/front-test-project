import styles from "./Stepper.module.css"

interface Props {
    steps: number[] | string[];
}

const Stepper: React.FC<Props> = ({steps}) => {
    return (
        <ol className={styles.stepper}>
            {steps.map(
                (step, index) => {
                    const isFirst = index===0;
                    const variantClass = isFirst? styles.primary : styles.secondary;
                    const circleClasses = `${styles.circle} ${variantClass}`
                    return(
                        <li key={index} className={styles.stepItem}>
                        <div className={circleClasses}>{step}</div>
                        {index !== steps.length - 1 && (
                            <div className={styles.line} />
                        )}
                        </li>
                    );
                })}
        </ol>
    );
};


export default Stepper;