import React, { Component } from 'react';
import allowance from '../allowance';
import web3 from '../web3';
import CreateAccounts from './CreateAccounts';
import FamilyAccounts from './FamilyAccounts';
import Header from './Header';
import Footer from './Footer';
import '../styles/HomePage.css'

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
            gas: '2000000'
        });
    };

    render() {
        return (
            <div className="homepage">
                <Header className="header"/>
                <CreateAccounts 
                    submitCreate={this.submitCreate}
                    className="createaccounts"
                    />
                <FamilyAccounts 
                    families={this.state.families} 
                    className="familyaccounts"
                    />
                <Footer className="footer"/>
            </div>
        );
    }
}

export default App;
