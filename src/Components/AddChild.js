import React, { Component } from 'react';
import web3 from '../web3';
import allowance from '../allowance';

class AddChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child: ''
        };
    }

    addChild = async () => {
        const accounts = await web3.eth.getAccounts();

        await allowance.methods.addChild().send({
            from: accounts[0]
        });

        this.setState({ child: accounts[0] });
    };


    render() {
        return (
            <p>The child is {this.state.child}
                <button onClick={this.addChild}>Set Child</button>
                {' '}
            </p>
        ) 
                
    }
}

export default AddChild
