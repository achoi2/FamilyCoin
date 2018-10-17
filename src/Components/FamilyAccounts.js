import React from 'react';
import FamilyAccount from './FamilyAccount';
import '../styles/FamilyAccounts.css';

const FamilyAccounts = props => {
    return (
        <div>
            <ol>
                {props.families.map((acNum, index) => (
                    <div key={acNum} className="accountrow">
                        <h2>{index + 1}</h2>
                        <FamilyAccount acNum={acNum} />
                    </div>
                    
                ))}
            </ol>
        </div>
    );
};

export default FamilyAccounts;
