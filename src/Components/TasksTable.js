import React from 'react';
import { Table } from 'bloomer';

const TasksTable = props => {
    console.log(props.task);
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {props.task.map(task => (
                        <tr>
                            <th>{task.description}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TasksTable;