import React from "react";
import type {NavItem} from "../../layout/Header/navData.tsx";
import NavStyles from "./Nav.module.css"
import '../../../styles/variables.css'

interface NavProps extends React.ComponentPropsWithoutRef<"nav">{
    items: NavItem[];
};

const Nav: React.FC<NavProps> = ({items, className='', ...props}) => {
    const FullNavStyle = `${NavStyles.nav} ${className}`
    return (
        <nav className={FullNavStyle} {...props}>
            <ul className={NavStyles.list}>
                {items.map(
                    (item) => (
                        <li key={item.label} className={NavStyles.item}>
                            <a href={item.href} className={NavStyles.link}>
                                {item.label}
                            </a>
                        </li>
                    )
                )
                }
            </ul>
        </nav>
    );
};

export default Nav