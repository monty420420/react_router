
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
           // 경로 /는 시작페이지 
           // 경로 *은 아무경로 입력한 페이지
    <BrowserRouter>
           <nav>
              <Link to="/">Home</Link> |{" "}
              <Link to="profile">Profile</Link>
          </nav>
       <Routes>         
              <Route path="/" element={<Home />} />
              <Route path="Profile" element={<Profile />} />
              <Route path='*' element={<ErrorPage />} />  
       </Routes>
    </BrowserRouter>
  );
}

export default App;
