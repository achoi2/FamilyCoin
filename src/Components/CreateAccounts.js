import React from 'react';
import { Button, Box } from 'bloomer';
import '../styles/CreateAccounts.css';

const CreateAccounts = (props) => {
    return (
        <div className="createaccounts">
            <Box className="createbox">
                <h3>Create a Family Account</h3>
                <Button onClick={props.submitCreate}
                    isColor="dark" className="createbutton" isOutlined
                >Create</Button>
            </Box>
        </div>
            
    );
}

export default CreateAccounts;