import styles from './Link.module.css';

export const Link = ({Icon, text, href}) => {
  return (
    <a href={href} className={styles.link}>
        <Icon className={styles.icon} />
        { text && <span className={styles.text}>{text}</span>}
    </a>
  )
}
