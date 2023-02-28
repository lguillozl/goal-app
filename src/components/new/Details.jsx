import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../services/Memory';
import styles from './Details.module.css';

export function Details() {

    const {id} = useParams();

    const [form, setForm] = useState({
        details: '',
        event: 1,
        period: 'semana',
        icon: '🏃🏻‍♂️',
        goal: 52,
        date: '2023-01-01',
        completed: 0,
    });

    const [state, dispatch] = useContext(Context);

    const {details, event, period, icon, goal, date, completed} = form;

    const handleChange = (event, prop) => {
        setForm(state => ({...state, [prop]: event.target.value}));
    };

    const navigate = useNavigate();

    const goalMemory = state.objects[id];
    
    useEffect(() => {
        if (!id) return;
        if (!goalMemory) {
            return navigate('/404');
        }
        setForm(goalMemory);
    },[id, goalMemory, navigate]);


    const handleCreate = () => {
        dispatch({type: 'create', goal: form});
        navigate('/list');
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch({type: 'update', goal: form});
        navigate('/list');
    }

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch({type: 'delete', id});
        navigate('/list');
    }

    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/list');
    }

    const frecuencyOptions = ['día', 'semana', 'mes', 'año'];
    const emojisOptions = ['💻', '🏃🏻‍♂️', '📚', '✈️', '💸'];
    
  return (
    <div className='card'>
        <form className='p-4'>
            <label className='label'>
                Describe tu meta
                <input 
                    className='input' 
                    type="text" 
                    placeholder="ej. 52 caminatas" 
                    value={details}
                    onChange={e => handleChange(e, 'details')}
                />
            </label>
            <label className='label'>
                ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                <div className='flex mb-6'>
                    <input 
                        className='input mr-6' 
                        type="number" 
                        value={event}
                        onChange={e => handleChange(e, 'event')} 
                    />
                    <select 
                        className='input' 
                        value={period}
                        onChange={e => handleChange(e, 'period')}                    >
                        {frecuencyOptions.map(option => <option key={option} value={option} onChange={e => handleChange(e, 'option')}>{option}</option> )}
                    </select>
                </div>
            </label>
            <label className='label'>
                ¿Cuantas veces deseas completar esta meta?
                <input className='input' type="number" value={goal} onChange={e => handleChange(e, 'goal')} />
            </label>
            <label className='label'>
                ¿Tienes una fecha limite?
                <input className='input' type="date" value={date} onChange={e => handleChange(e, 'date')} />
            </label>
            <label className='label'>
                ¿Cuantas veces haz completado ya esta fecha?
                <input className='input' type="number" value={completed} onChange={e => handleChange(e, 'completed')} />
            </label>
            <label className='label'>
                Escoge el icono para la meta
                <select className='input' value={icon} onChange={e => handleChange(e, 'icon')}>
                    {emojisOptions.map(emoji => <option key={emoji} value={emoji}>{emoji}</option>)}
                </select>
            </label>
        </form>
        <div className={styles.btn}>
            {!id && <button className='btn btn--black' onClick={handleCreate}>Crear</button>}
            {id && <button className='btn btn--black' onClick={handleUpdate}>Actualizar</button>}
            {id && <button className='btn btn--red' onClick={handleDelete}>Borrar</button>}
            <button className='btn btn--gray' onClick={handleCancel}>Cancelar</button>
        </div>
    </div>
  )
}
