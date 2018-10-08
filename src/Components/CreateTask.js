import React, { Component } from 'react';
import web3 from '../web3';
import allowance from '../allowance';

class CreateTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        };
    }

    createTask = async e => {
        e.preventDefault();

        const accounts = await web3.eth.getAccounts();

        await allowance.methods.createTask(this.state.task).send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
        });
    };

    render() {
        return (
            <form onSubmit={this.createTask}>
                <h3>Set task</h3>
                <div>
                    <input
                        placeholder="Enter amount"
                        value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })}
                    />
                    <input
                        placeholder="Enter task"
                        onChange={e => this.setState({ task: e.target.value })}
                    />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default CreateTask;
