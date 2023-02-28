import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';


export function Link ({Icon, text, to}) {
  return (
    <NavLink to={to} className={styles.link}>
        <Icon className={styles.icon} />
        { text && <span className={styles.text}>{text}</span>}
    </NavLink>
  )
}
