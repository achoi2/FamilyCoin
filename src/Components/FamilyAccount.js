import React from 'react';
import ViewTask from './ViewTask';
import { Link } from 'react-router-dom';

const FamilyAccount = props => {
    return <div>
            <h3>Account number: {props.acNum}</h3>
            {/* <ViewTask acNum={props.acNum} /> */}
            <Link to={props.acNum}>View Details</Link>
        </div>;
};

export default FamilyAccount;
