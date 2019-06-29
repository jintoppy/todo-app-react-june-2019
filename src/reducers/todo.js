const initialValue = [
    {
        text: 'abc',
        completed: false
    },
    {
        text: 'def',
        completed: false
    }
];
const todoReducer = (state = initialValue, action) => {
    if(action.type === 'mark_as_completed'){
        const itemIndex = action.payload;
        const newState =  state.map((item, index) => {
                                if(index === itemIndex) {
                                    return {
                                        ...item,
                                        completed: true
                                    };
                                }
                                return item;
                            });
        return newState
    }
    if(action.type === 'add_todo'){
        const newItem = {
            text: action.payload,
            completed: false
        };
        return [...state, newItem];
    }                            
    return state;
};

export default todoReducer;