import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './Pages/Form';
import FormResult from './Pages/FormResult';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(undefined);
  const [sectors, setSectors] = useState(null);
  const [agree, setAgree] = useState(null);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Form
              name={name}
              setName={setName}
              sectors={sectors}
              setSectors={setSectors}
              agree={agree}
              setAgree={setAgree}
            />
          }
        ></Route>
        <Route
          path='/result'
          element={<FormResult name={name} sectors={sectors} agree={agree} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
