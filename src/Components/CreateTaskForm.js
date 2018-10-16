import React from 'react';
import { Field, Input, Control, Button, Box } from 'bloomer';

const CreateTaskForm = props => {
    return (
        <div>
            <Field onSubmit={props.createTask}>
                <Control>
                    <h3>Set a task</h3>
                    <Input
                        placeholder="Enter amount"
                        value={props.value}
                        onChange={e => props.handleChangeValue(e.target.value)}
                    />
                    <Input
                        placeholder="Enter task"
                        onChange={e => props.handleChangeTask(e.target.value)}
                    />
                    <Button>Submit</Button>
                </Control>
            </Field>
        </div>
    );
};

export default CreateTaskForm;
