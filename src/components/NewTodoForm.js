import { useState, React } from "react";

function  NewTodoForm() {
    const [assigned, setAssigned] = useState('');
    const [description, setDescription] = useState('');


    const assignedChange = (event) => {
        console.log('assigned' ,event.target.value)
        setAssigned(event.target.value);
    }

    const descriptionChange = (event) => {
        console.log('description', event.target.value);
        setDescription(event.target.value);
    }
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required
                    onChange={assignedChange}></input>
                    value={assigned}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" rows={3} required
                    onChange={descriptionChange}
                    value={description}
                    ></input>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )
};

export default NewTodoForm;