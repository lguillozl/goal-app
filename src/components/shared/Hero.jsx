import styles from './Hero.module.css';
import { Link } from './Link';
import { ReactComponent as ListSVG} from '../../img/lista.svg';
import {ReactComponent as NewSVG} from '../../img/nueva.svg';

export const Hero = ({children}) => {
  return (
    <div className={styles.hero}>
        <aside className={styles.aside}>
            <Link 
              href='/lista' 
              text='Lista de Metas'
              Icon={ListSVG}
            />
            <Link 
              href='/crear' 
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
