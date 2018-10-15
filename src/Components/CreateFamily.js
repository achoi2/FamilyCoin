import React from 'react';
import { Button } from 'bloomer';

const CreateFamily = (props) => {
    return (
        <form onSubmit={props.submitCreate}>
            <h3>Create a Family Account</h3>
            <Button>Create</Button>
        </form>
    );
}

export default CreateFamily;