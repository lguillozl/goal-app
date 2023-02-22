export const Details = () => {

    const frecuencyOptions = ['day', 'week', 'month', 'year'];
    const emojisOptions = ['💻', '🏃🏻‍♂️', '📚', '✈️', '💸'];
  return (
    <div>
        <form action="">
            <label htmlFor="">
                Describe tu meta
                <input type="text" placeholder="ej. 52 caminatas" />
            </label>
            <label htmlFor="">
                ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                <div>
                    <input type="number" />
                    <select>
                        {frecuencyOptions.map(option => <option value={option}>{option}</option> )}
                    </select>
                </div>
            </label>
            <label htmlFor="">
                ¿Cuantas veces deseas completar esta meta?
                <input type="number" />
            </label>
            <label htmlFor="">
                ¿Tienes una fecha limite?
                <input type="date" />
            </label>
            <label htmlFor="">
                ¿Cuantas veces haz completado ya esta fecha?
                <input type="number" />
            </label>
            <label htmlFor="">
                Escoge el icono para la meta
                <select>
                    {emojisOptions.map(emoji => <option value={emoji}>{emoji}</option>)}
                </select>
            </label>
        </form>
        <div>
            <button>Crear</button>
            <button>Cancelar</button>
        </div>
    </div>
  )
}
