import React from 'react';
import { Field, Input, Control, Button } from 'bloomer';
import '../styles/CreateTaskForm.css';

const CreateTaskForm = (props) => {
    return (
        <div className="createtaskform">
            <h3>Set a task</h3>
            <Field onSubmit={props.createTask}>
                <Control className="control">
                    <Input className="forminput1" placeholder="Enter an amount" value={props.value} onChange={e => props.handleChangeValue(e.target.value)} />
                    <Input className="forminput2" placeholder="Enter a task" onChange={e => props.handleChangeTask(e.target.value)} />
                    <Button className="submitbutton" isColor="dark">Submit</Button>
                </Control>
            </Field>
        </div>
    );
};

export default CreateTaskForm;
