import React, { Component } from 'react';
// import web3 from '../web3';
import allowance from '../allowance';
import CreateFamily from './CreateFamily';
import FamilyAccounts from './FamilyAccounts';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            families: []
        };
    }

    async componentDidMount() {
        const families = await allowance.methods.getDeployedFamilies().call();

        this.setState({
            families: families
        });
    }

    render() {
        return (
            <div>
                <CreateFamily />
                <FamilyAccounts families={this.state.families}/>
            </div>
        );
    }
}

export default App;
