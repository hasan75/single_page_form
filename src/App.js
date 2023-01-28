import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './Pages/Form';
import FormResult from './Pages/FormResult';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/result' element={<FormResult />}></Route>
      </Routes>
    </div>
  );
}

export default App;
