import React, {useEffect, useState} from "react";
import useHttpPromise from "./hooks/use-http-promise";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function TaskLoaderPromise() {
    const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/tasks.json';
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const transformTasks = (tasksObj) => {
        const loadedTasks = [];

        for (const taskKey in tasksObj) {
            loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
        }

        setTasks(loadedTasks);
    };
    useHttpPromise( { url: url }).then ( (data) => (transformTasks(data  )));


    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };


    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
            />
        </React.Fragment>
    );

}

export default TaskLoaderPromise;