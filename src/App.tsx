import React from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';
// import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      {/* <Profile name="Saurav" age={ 19 } status="coder" salary="5ctc"/>
      <Profile name="Gaurav" status="Single" salary="5ctc"/>
      <Profile name="Deep"  /> */}
      <Todo/>
    </div>
  );
}

export default App;
