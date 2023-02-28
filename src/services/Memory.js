import { createContext, useReducer } from "react";

const memory = localStorage.getItem('goals');

const initialState = 
    memory ? JSON.parse(memory) : {
        order: [],
        objects: {}
    };

function reducer(state, action) {
    switch (action.type) {
        case 'set': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce(
                    (object, goal) => ({ ...object, [goal.id]: goal }), 
                    {}
                ),
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        case 'create': {
            const id = Math.random();
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                },
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal,
            };
            const newState = { ...state };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        case 'delete': {
            const id = action.id;
            const newOrder = state.order.filter(item => item != id);
            delete state.objects[id];
            const newState = {
                order: newOrder,
                objects: state.objects
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        };
        default:
            throw new Error();
    }
}

export const Context = createContext(null);

export function Memory({children}) {

    // const [state, dispatch] = useReducer(reducer, initialState);
    const value = useReducer(reducer, initialState);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}