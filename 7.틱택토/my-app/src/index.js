import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './Table';
import Tr from './Tr';
import Td from './Td';
import TicTacToe from './TicTacToe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);
