import React, {useCallback, useEffect, useState} from "react";
import useHttpAsyncCallback1 from "./hooks/use-http-async-callback1";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttpAsyncCallback2 from "./hooks/use-http-async-callback2";

// TaskLoaderAsync is the result of Adjusting the Cusotm hook Logic.
// By adding UseCallback two times.
// So this is async sith useCallback, where necessary.

// Without these useCallBacks:
// SetIsLoading and setError in the use-http-async.js changes the status and therefore initiates and reexecute. the TaskLoaderAsync
// So I the end it should not work.

// This is how Java Script works.

// DIe namen Async und AsyncCallback sind nicht callback.

function TaskLoaderAsyncCallback1() {
    const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/tasks.json';
    const [tasks, setTasks] = useState([]);

    const transformTasks = useCallback((tasksObj) => {
        const loadedTasks = [];

        for (const taskKey in tasksObj) {
            loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
        }
        setTasks(loadedTasks);
    }, []);

    const { isLoading, error, sendRequest: fetchTasks } = useHttpAsyncCallback1( { url: url }, transformTasks );

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    useEffect(() => {
        fetchTasks()
    }, []);  // This created an infititive loop , but why

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

export default TaskLoaderAsyncCallback1;