import React from 'react';
import FamilyAccount from './FamilyAccount';

const FamilyAccounts = (props) => {
    return(
        <div>
            {props.families.map(acNum => <FamilyAccount 
            key={acNum}
            acNum={acNum}
            />)}
        </div>
    );
}

export default FamilyAccounts;
