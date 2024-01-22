import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
    </Routes>
  );
}

export default App;