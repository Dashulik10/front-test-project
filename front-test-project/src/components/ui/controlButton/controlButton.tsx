import styles from "./controlButton.module.css"
import left from "../../../assets/left.svg"
import right from "../../../assets/right.svg"
import React from "react";
import '../../../styles/variables.css'

interface Props extends React.ComponentPropsWithoutRef<"button"> {
    direction: 'prev' | 'next';
    onClick?: () => void;
}

const ControlButton:  React.FC<Props> = ( {direction, onClick, ...props} ) => {
    const themeClass = direction === 'prev' ? styles.light : styles.dark;
    const iconUrl = direction === 'prev' ? left : right;
    return (
        <button
            className={`${styles.btn} ${themeClass}`}
            type="button"
            onClick={onClick}
            {...props}
        >
            <img src={iconUrl} className={styles.icon} alt="icon"/>
        </button>
    );
};

export default ControlButton;