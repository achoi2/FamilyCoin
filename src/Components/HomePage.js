import React, { Component } from 'react';
import web3 from '../web3';
import allowance from '../allowance';
import AddChild from './AddChild';
import CompletedTasks from './CompletedTasks';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parent: '',
            child: '',
            task: '',
            value: '',
            message: ''
        };
    }

    async componentDidMount() {
        const parent = await allowance.methods.parent().call();
        const task = await allowance.methods.task().call();
        const child = await allowance.methods.child().call();

        this.setState({
            parent: parent,
            task: task,
            child: child
        });
    }


    incompleteTask = async () => {
        const accounts = await web3.eth.getAccounts();

        

        await allowance.methods.taskIncomplete().send({
            from: accounts[0]
        });

    };

    completeTask = async () => {
        const accounts = await web3.eth.getAccounts();

        await allowance.methods.taskCompleted().send({
            from: accounts[0]
        });

    };

    render() {
        return (
            <div>
                <h2>Allowance</h2>
                <p>The parent is {this.state.parent}</p>
                <h2>{this.state.message}</h2>
                <p>
                    The task is ({this.state.task}) for {this.state.value}{' '}
                    ether
                </p>
                <p>Is the task completed?</p>
                <button onClick={this.incompleteTask}>no</button>{' '}
                <button onClick={this.completeTask}>yes</button>
            </div>
        );
    }
}

export default App;
