import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <p> HELLO! </p>
    <Button Primary> GETOUT </Button>
    <Progress percent = {33} indicating/>
    </div>
  );
}

export default App;
