import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <div className="App bg-[#EAEBEF] h-screen py-14">
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/oplata/:id" element={<SecondPage/>} />
      </Routes>
    </div>
  );
}

export default App;
