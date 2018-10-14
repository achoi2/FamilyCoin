import React from 'react';
// import ViewTask from './ViewTask';


const FamilyAccount = (props) => {
    return <div>
            <h3>Account number: {props.acNum}</h3>
            {/* <ViewTask acNum={props.acNum} /> */}
            <button>View Details</button>
        </div>;
};

export default FamilyAccount;