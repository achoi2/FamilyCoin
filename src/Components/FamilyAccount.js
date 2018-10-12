import React, { Component } from 'react';
import web3 from '../web3';
// import allowance from '../allowance';
import Allowance from '../getallowance';

class FamilyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            parent: '',
            value: ''
        };
    }

    async componentDidMount() {
        const allowance = Allowance(this.props.acNum);
        const summary = await allowance.methods.getSummary().call();
        const taskCount = await     allowance.methods.getTaskCount().call()

        const task = await Promise.all(
            Array(parseInt(taskCount)).fill().map((element, index) => {
                return allowance.methods.tasks(index).call()
            })
        );


        this.setState({
            tasks: summary[0],
            parent: summary[1],
            task
        });
    }

    createTask = async e => {
        e.preventDefault();
        const allowance = Allowance(this.props.acNum);
        try {
            const accounts = await web3.eth.getAccounts();
            await allowance.methods.createTask(this.state.task, this.state.value).send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
        } catch (err) {

        }
    };

    render() {
        return (
            <div>
                <h3>Account number: {this.props.acNum}</h3>
                <h3>Parent Account: {this.state.parent}</h3>
                <h4>There are {this.state.tasks} tasks</h4>
                
                <form onSubmit={this.createTask}>
                    <h3>Set a task</h3>
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
            
            </div>
        );
    }
}


export default FamilyAccount;