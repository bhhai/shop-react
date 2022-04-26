import React from 'react';
import TodoForm from '../TodoForm';

Todo.propTypes = {};

function Todo(props) {
  const handleOnSubmit = (values) => {
    console.log('TODO: ', values);
  };
  return (
    <div>
      <TodoForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Todo;
