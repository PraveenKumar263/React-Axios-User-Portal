import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ButtonAppBar } from './components/AppBar';
import { HomePage } from './components/HomePage';
import { UserList } from './components/UserList';
import { UserProvider } from './components/UsersContext';

function App() {

  return (
    <UserProvider>
      <ButtonAppBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/userData" element={<UserList />} />
      </Routes>
    </UserProvider>
  );
}

export default App;