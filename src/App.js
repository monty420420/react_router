
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
           // 경로 /는 시작페이지 
           // 경로 *은 아무경로 입력한 페이지
           // Routes 밖에다 설정하면 페이지 이동해도 그부분은 계속 보여짐 
           // 경로뒤에 :{parm} 입력시 해당 전용 페이지 생성  // http://localhost:3000/profile/da url입력시 da의 profile입니다로 보여짐
    <BrowserRouter>
           <nav>
              <Link to="/">Home</Link>
              <Link to="profile">Profile</Link>
          </nav>
       <Routes>         
              <Route path="/" element={<Home />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="/Profile/:username" element={<Profile />} />
              <Route path='*' element={<ErrorPage />} />  
       </Routes>

       <div>Footer</div> 
    </BrowserRouter>
  );
}

export default App;
