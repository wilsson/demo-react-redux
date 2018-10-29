// actionTypes
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// actionCreator
export const addTask = (task) => ({
    type: ADD_TASK,
    task
});

export const deleteTask = (taskDelete) => ({
    type: DELETE_TASK,
    taskDelete
});

const initialState = [
    'react',
    'redux'
];

// reducer
export const reducer = (state = initialState, action) => {
    console.log('>>', action);
    switch(action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.task
            ]
        case DELETE_TASK:
            return state.filter(task => task !== action.taskDelete);
        default:
            return state;
    }
};