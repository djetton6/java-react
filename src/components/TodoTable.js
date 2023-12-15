import React from "react";
import TodoRowItem from "./TodoRowItem";

const TodoTable = (props) => {
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Runner</th>
            </tr>
          </thead>
          <tbody>
            {props.todos.map(todo =>  {
            return (
              <TodoRowItem
                rowNumber={todo.rowNumber}
                rowDescription={todo.rowDescription}
                rowAssigned={todo.rowAssigned}
              />
           )})}
          </tbody>
        </table>
    );
};


export default TodoTable;