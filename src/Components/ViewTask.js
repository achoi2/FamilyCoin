import React, { Component } from 'react';
import web3 from '../web3';
import Allowance from '../getallowance';
import CreateTaskForm from './CreateTaskForm';

class ViewTask extends Component {
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
        const taskCount = await allowance.methods.getTaskCount().call()

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
                <h3>Parent Account: {this.state.parent}</h3>
                <h4>There are {this.state.tasks} tasks</h4>
                <CreateTaskForm  createTask={this.createTask} value={this.state.value}/>
            </div>
        );
    }
}


export default ViewTask;