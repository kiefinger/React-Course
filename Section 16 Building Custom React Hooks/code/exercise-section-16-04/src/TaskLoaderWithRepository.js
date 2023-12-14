import React, {useCallback, useEffect, useState} from "react";
import useHttpAsyncCallback2 from "./hooks/use-http-async-callback2";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import TaskRepository from "./components/Tasks/TaskRepository";

// ALl data that may change, is not anymore handed over to the customHook, but instead as parameter to fetchtask.
function TaskLoaderWithRepository() {
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, load: loadTasks } = TaskRepository();

    useEffect(() => {
        const transformTasks = (loadedTasks) => {
            console.log("got loadedTasks")
            setTasks(loadedTasks);
        };

        loadTasks(
            transformTasks
        );
    }, [loadTasks]);

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
                onFetch={loadTasks}
            />
        </React.Fragment>
    );
}

export default TaskLoaderWithRepository;