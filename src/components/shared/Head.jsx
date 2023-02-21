import styles from './Head.module.css';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { ReactComponent as ProfileSVG } from '../../img/profile.svg';
import { Link } from './Link';

export const Head = () => {
  return (
    <header className={styles.head}>
        <div className={styles.container}>
          <LogoSVG className={styles.appIcon} />
          <a href="/" className={styles.title}>Metas App</a>
        </div>
        <nav className={styles.flex}>
          <Link 
            href='/perfil' 
            Icon={ProfileSVG}
          />
        </nav>
    </header>
  )
}
