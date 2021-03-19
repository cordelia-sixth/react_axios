import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const { useState } = React;


// ボタンを押すとgetリクエストを発酵する

const CounterHook = () => {

  const [data, setData] = useState([]);

  const getRequest = () => {
    setData((prevData) => prevData = axios.get('https://jsonplaceholder.typicode.com/users'));
  };

  return (
    <>
      <h1>{data[0]}</h1>
      <button onClick={getRequest}>click!</button>
    </>
  );
};

ReactDOM.render(
  <CounterHook />, 
  document.getElementById('root')
);