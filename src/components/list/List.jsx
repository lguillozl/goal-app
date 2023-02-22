import { Goal } from "./Goal"

const listMoack = [
    {
        id: 1,
        details: 'Correr por 30 min',
        time: 'día',
        event: 1,
        icon: '👟',
        days: 365,
        date: '2023-03-01',
        completed: 5
    },
    {
        id: 2,
        details: 'Estudiar por 60 min',
        time: 'día',
        event: 1,
        icon: '📚',
        days: 365,
        date: '2023-03-01',
        completed: 10
    }
];

export const List = () => {
  return (
    listMoack.map(goal => <Goal {...goal}></Goal>)
  )
}
