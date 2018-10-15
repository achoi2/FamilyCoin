import React from 'react';
import { Button } from 'bloomer';

const CreateAccounts = (props) => {
    return (
        <div>
            <h3>Create a Family Account</h3>
            <Button onClick={props.submitCreate}>Create</Button>
        </div>
            
    );
}

export default CreateAccounts;