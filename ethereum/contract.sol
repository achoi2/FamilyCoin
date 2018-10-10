pragma solidity ^0.4.0;

contract Allowance {
    struct Task {
        string description;
        uint value;
        bool complete;
        
        // who has completed the tasks
        mapping(address => bool) completedTasks;
    }
    
    Task[] public tasks;
    address public parent;
    mapping(address => bool) public children;
    
    modifier restricted() {
        require(msg.sender == parent);
        _;
    }
    
    function Allowance() public payable {
        parent = msg.sender;
    }
    
    function setChild() public {
        children[msg.sender] = true;
    }
    
    // creating instance of a task 
    function createTask(string description, uint value) public payable restricted {
        require(msg.value > .01 ether);
        Task memory newTask = Task({
            description: description,
            value: value,
            complete: false   
        });  
    
        tasks.push(newTask);
    }
    
    //completed a specific task
    function finishedTask(uint index) public payable {
        // checks if it is a child
        require(children[msg.sender]);
        // can't do the task twice!
        require(!tasks[index].completedTasks[msg.sender]);
    
        // completed that task 
        tasks[index].completedTasks[msg.sender] = true;
        tasks[index].complete = true;
    } 

    // task is completed. send money to child
    function giveMoney(uint index) public restricted {
        require(tasks[index].complete);
        
        tasks[index].completedTasks.transfer(tasks[index].value);
    }

    // task is incompleted. return money to parent
    function returnMoney(uint index) public restricted {
        parent.transfer(tasks[index].value);
    }
}