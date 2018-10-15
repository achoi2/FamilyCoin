import React from 'react';

const TasksTable = (props) => {
    console.log(props.task)
    return <div>
            {props.task.map(task => <ul key={task[1]}>{task[0]}</ul>
            )}
        </div>;
}

export default TasksTable;