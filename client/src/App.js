import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage/LandingPage';
import MemoList from './Component/MemoList/MemoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        실용프로그래밍 과제: 메모장 만들기
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/list" element={<MemoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
