import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import EventPage from './Pages/Event/EventPage';
import RegistrationPage from './Pages/Registration/Registration';
import { useState, useEffect } from 'react';
import LoginPage from './Pages/Login/Login';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from './store/userData';
import TicketScanerPage from './Pages/TicketScaner/TicketScaner';
import { getApi } from './http/getApi';

const cookie = new Cookies()
function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [sidebar, setSidebar] = useState(true)
  const user = useSelector( state => state.userData)

  useEffect(()=> {
    if(
      location.pathname === '/scanner' || 
      location.pathname === '/registration' || 
      location.pathname === '/login' || 
      location.pathname === '/sellticket'
    ){
      setSidebar(false)
    }else {
      setSidebar(true)
    }
  }, [location])

  useEffect(()=> {
   if(cookie.get('sessionID') !== undefined) {
    getApi(`users/${cookie.get('sessionID')}`).then(res => {
      return(
        dispatch(userAction.changeLogedIn(true)),
        dispatch(userAction.changeBalance(res.data.balance)),
        dispatch(userAction.changeVerified(res.data.isVerify)),
        dispatch(userAction.changeUserId(res.data.id))
      )
    })
   }
  }, [user, dispatch])
  

  return (
    <>
    <Header />
      <div className='container'>
        <div className='row'>
        {sidebar && <Sidebar />}
        <Routes>
          <Route path="/*" element={<EventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/scanner" element={<TicketScanerPage />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
