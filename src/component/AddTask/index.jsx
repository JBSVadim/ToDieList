import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik'
const NewTask = props => {
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
    </div>
  );
}

export default NewTask;
