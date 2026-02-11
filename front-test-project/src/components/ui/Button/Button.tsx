import React from "react";
import '../../../styles/variables.css'
import styles from './Button.module.css';

interface Props extends React.ComponentPropsWithoutRef<"button"> {
    variant?: 'primary' | 'secondary' | 'beautiful' | 'play';
    children: React.ReactNode;
}

const Button: React.FC<Props> =({
                                          children,
                                          variant='primary',
                                          onClick,
                                          className='',
                                          ...props
}) => {
    const buttonStyle = `${styles.button} ${styles[variant]} ${className}`.trim();
    return (
        <button
            className={buttonStyle}
            onClick={onClick}
            {...props}
        >{children}</button>
    );
};

export default Button;