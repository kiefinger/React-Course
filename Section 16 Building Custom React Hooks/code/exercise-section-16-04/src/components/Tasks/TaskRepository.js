import useHttpAsyncCallback2 from "../../hooks/use-http-async-callback2";
import {useCallback, useState} from "react";

function TaskRepository (props) {
    const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/tasks.json';
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendRequest  } = useHttpAsyncCallback2();

    const load = useCallback(async (applyData) => {
        console.log( "load")
        const transformTasks = (tasksObj) => {
            console.log( "transformTasks")
            const loadedTasks = [];
            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
            }
            applyData(loadedTasks);
        };

        sendRequest(
            { url: url},
            transformTasks
        );
    }, []);

    return {
        isLoading,
        error,
        load,
    };


}

export default TaskRepository;
