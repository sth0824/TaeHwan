import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import SignUp from './components/SignUp'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <TodoTemplate>
            <TodoInsert />
            <TodoList />
          </TodoTemplate>
        } />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
