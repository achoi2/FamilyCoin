import React, { Component } from 'react';
import web3 from '../web3';
import Allowance from '../getaddress';
import CreateTaskForm from './CreateTaskForm';
import TasksTable from './TasksTable';
import { Box } from 'bloomer';
import '../styles/ViewTask.css';

class ViewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            parent: '',
            value: '',
            taskInput: '',
            valueInput: ''
        };
    }

    async componentDidMount() {
        const allowance = Allowance(this.props.match.params.acNum);
        const summary = await allowance.methods.getSummary().call();
        const taskCount = await allowance.methods.getTaskCount().call();

        const task = await Promise.all(
            Array(parseInt(taskCount))
                .fill()
                .map((element, index) => {
                    return allowance.methods.tasks(index).call();
                })
        );

        this.setState({
            tasks: summary[0],
            parent: summary[1],
            task: task
        });
    }

    createTask = async e => {
        console.log('234')
        e.preventDefault();
        const allowance = Allowance(this.props.match.params.acNum);
        try {
            const accounts = await web3.eth.getAccounts();
            await allowance.methods
                .createTask(this.state.taskInput, this.state.valueInput)
                .send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.valueInput, 'ether'),
                    gas: '2000000'
                });
        } catch (err) {}
    };

    render() {
        const handleChangeTask = task => {
            this.setState({ taskInput: task });
        };

        const handleChangeValue = value => {
            this.setState({ valueInput: value });
        };

        return (
            <div className="viewtask">
                <Box className="viewbox">
                    <h3 className="viewtitle">
                        Parent Account: {this.state.parent}
                    </h3>
                    <h4 className="viewsubtitle">
                        There are {this.state.tasks} tasks
                    </h4>
                    <CreateTaskForm
                        handleChangeTask={handleChangeTask}
                        handleChangeValue={handleChangeValue}
                        createTask={this.createTask}
                        value={this.state.valueInput}
                        task={this.state.taskInput}
                        // className="taskform"
                    />
                    <TasksTable task={this.state.task} className="tabletask" />
                </Box>
            </div>
        );
    }
}

export default ViewTask;
