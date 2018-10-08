import React, { Component } from 'react';
import web3 from '../web3';
import allowance from '../allowance';

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

    setChild = async () => {
        const accounts = await web3.eth.getAccounts();

        await allowance.methods.setChild().send({
            from: accounts[0]
        });

        this.setState({ child: accounts[0] });
    };

    submitTask = async e => {
        e.preventDefault();

        const accounts = await web3.eth.getAccounts();

        

        await allowance.methods.createTask(this.state.task).send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
        });

    };

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
                <p>
                    The child is {this.state.child}
                    <button onClick={this.setChild}>Set Child</button>
                </p>
                <hr />
                <form onSubmit={this.submitTask}>
                    <h3>Set task</h3>
                    <div>
                        <input
                            placeholder="Enter amount"
                            value={this.state.value}
                            onChange={e =>
                                this.setState({ value: e.target.value })
                            }
                        />
                        <input
                            placeholder="Enter task"
                            onChange={e =>
                                this.setState({ task: e.target.value })
                            }
                        />
                    </div>
                    <button>Submit</button>
                </form>
                <hr />
                <h2>{this.state.message}</h2>
                <p>
                    The task is ({this.state.task}) for {this.state.value}{' '}
                    ether
                </p>
                <p>Is the task completed</p>
                <button onClick={this.incompleteTask}>no</button>{' '}
                <button onClick={this.completeTask}>yes</button>
            </div>
        );
    }
}

export default App;
