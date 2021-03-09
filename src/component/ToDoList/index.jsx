import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik'
const ToDoList = props => {
  const [tasks, setTasks] = useState([{
    id: Date.now(),
    isDone: false,
    body: 'dumb',
  },]);

  const addTask = values => {
    const newTask = {
      body: values.body,
      id: Date.now(),
      isDone: false,
    };
    setTasks([...tasks, newTask]);

  };

  
  return (
    <div> 
      <Formik initialValues={{body: ''}}  onSubmit={addTask}>
        <Form>
          <Field name='body' />
          <input type='submit'/>
        </Form>
      </Formik>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>{JSON.stringify(t.body)}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
