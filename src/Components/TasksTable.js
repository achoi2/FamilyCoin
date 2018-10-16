import React from 'react';
import { Table } from 'bloomer';

const TasksTable = props => {
    return <div>
            <Table isBordered>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Tasks</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {props.task.map((task, index) => <tr key= { index }>
                            <th>{index + 1}</th>
                            <th>{task.description}</th>
                            <th>{task.value} Ether</th>
                        </tr>)}
                </tbody>
            </Table>
        </div>
};

export default TasksTable;
