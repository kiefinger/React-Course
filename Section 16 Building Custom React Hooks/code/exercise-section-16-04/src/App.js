import React, {useCallback, useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttpAsyncCallback2 from "./hooks/use-http-async-callback2";
import TaskLoaderAsyncCallback2 from "./TaskLoaderAsyncCallback2";
import TaskLoaderAsyncCallback1 from "./TaskLoaderAsyncCallback1";
import TaskLoaderPromise from "./TaskLoaderPromise";
import TaskLoaderWithRepository from "./TaskLoaderWithRepository";

function App() {

  return ( <TaskLoaderWithRepository/>
  );
}

export default App;
