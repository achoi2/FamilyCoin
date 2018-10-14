import React from 'react';

const CreateTaskForm = (props) => {
    return(
        <div>
            <form onSubmit={props.createTask}>
                <h3>Set a task</h3>
                <div>
                    <input
                        placeholder="Enter amount"
                        value={props.value}
                        onChange={e =>
                            this.setState({ value: e.target.value })
                        }
                    />
                    <input
                        placeholder="Enter task"
                        onChange={e =>
                            this.setState({ task: e.target.value })
                        }
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreateTaskForm;