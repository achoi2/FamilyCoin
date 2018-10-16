import React, { Component } from 'react';
import allowance from '../allowance';
import web3 from '../web3';
import CreateAccounts from './CreateAccounts';
import FamilyAccounts from './FamilyAccounts';
import Header from './Header';
import Footer from './Footer';

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

    submitCreate = async event => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();
        await allowance.methods.createFamily().send({
            from: accounts[0],
            gas: '1000000'
        });
    };

    render() {
        return (
            <div>
                <Header />
                <CreateAccounts submitCreate={this.submitCreate}/>
                <FamilyAccounts families={this.state.families} />
                <Footer />
            </div>
        );
    }
}

export default App;
