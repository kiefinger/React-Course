import React, {useEffect, useState} from "react";
import useHttpAsyncCallback2 from "./hooks/use-http-async-callback2";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

// ALl data that may change, is not anymore handed over to the customHook, but instead as parameter to fetchtask.
function TaskLoaderAsyncCallback2() {
    const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/tasks.json';
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHttpAsyncCallback2();

    useEffect(() => {
        const transformTasks = (tasksObj) => {
            const loadedTasks = [];
            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            }
            setTasks(loadedTasks);
        };

        fetchTasks(
            { url: url},
            transformTasks
        );
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        console.log("taskAddHandler: task=" + task);
        setTasks((prevTasks) => prevTasks.concat(task));
    };


    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );

}

export default TaskLoaderAsyncCallback2;