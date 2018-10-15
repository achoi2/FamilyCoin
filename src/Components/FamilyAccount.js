import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'bloomer';

const FamilyAccount = props => {
    return (
        <div>
            <Box>
                <h3>Account number: {props.acNum}</h3>
                <Link to={props.acNum}>View Details</Link>
            </Box>
        </div>
    );
};

export default FamilyAccount;
