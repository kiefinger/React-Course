import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttpAsyncCallback2 from "../../hooks/use-http-async-callback2";

const NewTask = (props) => {
  const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/tasks.json';

  const {isLoading, error, sendRequest: sendTaskRequest } = useHttpAsyncCallback2();

  function applyResult( taskText, data) {
    console.log(taskText);
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest ( {
        url: url,
        method: "POST",
        headers: {  'Content-Type': 'application/json', },
        body: { text: taskText }
      },
      applyResult.bind(null, taskText) );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
