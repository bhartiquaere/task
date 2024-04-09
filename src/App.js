import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
import DealsDashboard from './pages/Dashboard/DealsDashboard';
import SingIn from './pages/auth/SingIn';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SingIn/>}/>
    <Route>
    <Route path='/login' element={<SingIn/>}/>
    <Route path='/deals-dashboard' element={<DealsDashboard/>}/>
    <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
  </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
