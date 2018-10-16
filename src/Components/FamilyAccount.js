import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'bloomer';
import '../styles/FamilyAccount.css';

const FamilyAccount = props => {
    return (
        <div className="familyaccount">
            <Box className="familyaccountbox">
                <div className="accountbox">
                    <h5 className="acctitle">Account Number</h5>
                    <div className="accdetails">
                        <h4 className="accsubtitle">{props.acNum}</h4>
                        <Link to={props.acNum} className="accountlink">
                            View Details
                        </Link>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default FamilyAccount;
