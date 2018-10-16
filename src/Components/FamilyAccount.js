import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Title, Subtitle } from 'bloomer';
import '../styles/FamilyAccount.css';

const FamilyAccount = props => {
    return (
        <div className="familyaccount">
            <Box className="accountbox">
                <Title isSize="5">
                    Account Number <Subtitle className="subtitle" isSize="5">{props.acNum}</Subtitle>
                </Title>
                <Link to={props.acNum} className="accountlink">
                    View Details
                </Link>
            </Box>
        </div>
    );
};

export default FamilyAccount;
