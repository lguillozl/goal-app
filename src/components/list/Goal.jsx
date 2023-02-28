import { Link } from 'react-router-dom';
import styles from './Goal.module.css';

export function Goal({
    id, 
    details, 
    event, 
    icon, 
    completed, 
    period, 
    goal
  }) {
  return (
    <Link to={`/list/${id}`} className={styles.goalStyle + ' card'}>
      <div className='flex items-center'>
        <div className={styles.icon}>{icon}</div>
          <p className='text-xl ml-5 mr-10'>
            {event}
            <sub className='text-xs text-gray-500 ml-1'>/ {period}</sub>
          </p>
          <p>{details}</p>
        </div>
      <div className='flex'>
        <div className='relative m-2 mx-5'>
          <p className='text-center'>
            {completed} de {goal}
          </p>
          <div className={styles.bar1}>
            <div 
              style={{
                width: `${Math.round((completed / goal) * 100)}%`,
              }} 
              className={styles.bar2}>
            </div>
          </div>
        </div>
        <button className='btn btn--gray'>Completado</button>
      </div>
    </Link>
  )
}
