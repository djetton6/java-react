import { useState, React } from "react";

function  NewTodoForm(props) {
    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');


    const submitTodo = () => {
        if(description !== "" && assigned !== "") {
            props.addTodo(description, assigned);
            setDescription(" ")
            setAssigned(" ")

        }

    };

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required
                    onChange={event => setAssigned(event.target.value)}
                    value={assigned}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" rows={3} required
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                    ></input>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
};

export default NewTodoForm;