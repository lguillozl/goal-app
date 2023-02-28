import styles from './Hero.module.css';
import { Link } from './Link';
import { ReactComponent as ListSVG} from '../../img/lista.svg';
import {ReactComponent as NewSVG} from '../../img/nueva.svg';

export function Hero ({children}) {
  return (
    <div className={styles.hero}>
        <aside className={styles.aside}>
            <Link 
              to='/list' 
              text='Lista de Metas'
              Icon={ListSVG}
            />
            <Link 
              to='/new' 
              text='Nueva Meta' 
              Icon={NewSVG}
            />
        </aside>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
