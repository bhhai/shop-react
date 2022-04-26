import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { descrease, inscrease } from './counterSlice';

Counter.propTypes = {};

function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count); //lay state tu store

  const handleIncreaseClick = () => {
    dispatch(inscrease()); //goi action increase tu store
  };
  const handleDecreaseClick = () => {
    dispatch(descrease()); //goi action increase tu store
  };
  return (
    <div>
      Count: {count}
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Descrease</button>
    </div>
  );
}

export default Counter;
