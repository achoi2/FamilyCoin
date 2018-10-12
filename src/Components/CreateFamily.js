import React, { Component } from 'react';
import web3 from '../web3';
import allowance from '../allowance';

class CreateFamily extends Component {
    
    submitCreate = async (event) => {
        event.preventDefault()

        const accounts = await web3.eth.getAccounts();
        await allowance.methods
            .createFamily()
            .send({
                from: accounts[0],
                gas: '1000000'
            });
    }
    
    render() {
        return (
            <form onSubmit={this.submitCreate}>
                <h3>Create a Family Account</h3>
                <button>create</button>
            </form>
        );
    }
}

export default CreateFamily;