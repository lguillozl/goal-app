import styles from './Head.module.css';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { ReactComponent as ProfileSVG } from '../../img/profile.svg';
import { Link } from './Link';

export function Head() {
  return (
    <header className={styles.head}>
        <div className={styles.container}>
          <LogoSVG className={styles.appIcon} />
          <a to="/" className={styles.title}>Metas App</a>
        </div>
        <nav className={styles.flex}>
          <Link 
            to='/profile' 
            Icon={ProfileSVG}
          />
        </nav>
    </header>
  )
}
