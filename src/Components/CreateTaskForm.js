import React from 'react';
import { Field, Input, Control, Button } from 'bloomer';

const CreateTaskForm = props => {
    return (
        <div>
            <Field onSubmit={props.createTask}>
                <h3>Set a task</h3>
                <Control>
                    <Input
                        placeholder="Enter amount"
                        value={props.value}
                        onChange={e => props.handleChangeValue(e.target.value)}
                    />
                    <Input
                        placeholder="Enter task"
                        onChange={e => props.handleChangeTask(e.target.value)}
                    />
                </Control>
                <Button>Submit</Button>
            </Field>
        </div>
    );
};

export default CreateTaskForm;
