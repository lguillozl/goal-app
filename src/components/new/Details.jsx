import styles from './Details.module.css';

export const Details = () => {

    const frecuencyOptions = ['day', 'week', 'month', 'year'];
    const emojisOptions = ['💻', '🏃🏻‍♂️', '📚', '✈️', '💸'];
  return (
    <div className='card'>
        <form className='p-4'>
            <label className='label'>
                Describe tu meta
                <input className='input' type="text" placeholder="ej. 52 caminatas" />
            </label>
            <label className='label'>
                ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                <div className='flex mb-6'>
                    <input 
                        className='input mr-6' 
                        type="number" 
                    />
                    <select className='input'>
                        {frecuencyOptions.map(option => <option value={option}>{option}</option> )}
                    </select>
                </div>
            </label>
            <label className='label'>
                ¿Cuantas veces deseas completar esta meta?
                <input className='input' type="number" />
            </label>
            <label className='label'>
                ¿Tienes una fecha limite?
                <input className='input' type="date" />
            </label>
            <label className='label'>
                ¿Cuantas veces haz completado ya esta fecha?
                <input className='input' type="number" />
            </label>
            <label className='label'>
                Escoge el icono para la meta
                <select className='input'>
                    {emojisOptions.map(emoji => <option value={emoji}>{emoji}</option>)}
                </select>
            </label>
        </form>
        <div className={styles.btn}>
            <button className='btn btn--black'>Crear</button>
            <button className='btn btn--gray'>Cancelar</button>
        </div>
    </div>
  )
}
