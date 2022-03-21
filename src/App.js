
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
           //index element는 기본 첫페이지
           //element들은 기본첫페이지에서 이동할수 있는 라우터들
    <BrowserRouter>
           <nav>
              <Link to="/">Home</Link> |{" "}
              <Link to="profile">Profile</Link>
          </nav>
       <Routes>
              <Route path='/' element={<App />} />
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="Profile" element={<Profile />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
