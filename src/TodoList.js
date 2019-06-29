import React from 'react';

const TodoList = ({list, setComplete}) => {
    const liItems = list.map((item, idx) => {
        const myStyle = {
            color: item.completed ? 'green' : 'magenta'
        };
        return (
            <li key={idx}>
                <span style={myStyle}>{item.text} </span>
                {item.completed ? null : (
                    <button onClick={() => setComplete(idx)}>I have done this</button>
                )}
            </li>
        );
    });
    return (
        <div>
            <ul>
                {liItems}
            </ul>
        </div>
    )
};

export default TodoList;