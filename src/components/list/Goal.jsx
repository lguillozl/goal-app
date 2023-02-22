import styles from './Goal.module.css';

export const Goal = ({id, details, time, event, icon, days, date, completed}) => {

  return (
    <div className={styles.goalStyle + ' card'}>
      <div className='flex items-center'>
        <div className={styles.icon}>{icon}</div>
          <p className={styles.frequency}>{event}
            <sub className={styles.sub}>/ semana</sub>
          </p>
          <p>{details}</p>
        </div>
      <div className='flex'>
        <div className='relative m-2 mx-5'>
          <p className='text-center'>
            {completed} de {days}
          </p>
          <div className={styles.bar1}>
            <div 
              style={{
                width: `${Math.round((completed / days) * 100)}%`,
              }} 
              className={styles.bar2}>
              </div>
          </div>
        </div>
        <button className='btn btn--gray'>Completado</button>
      </div>
    </div>
  )
}
