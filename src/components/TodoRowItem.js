import React from 'react';


const TodoRowItem = () => {
    const rowNumber = 1;
    const rowDescriptiion = "Feed Dog";
    const rowAssigned = "Eric"
    return (
        <tr>
            <th scope="row">{rowAssigned}</th>
            <td>{rowDescriptiion}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
};


export default TodoRowItem;