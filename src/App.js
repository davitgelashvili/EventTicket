import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import EventPage from './Pages/Event/EventPage';
import RegistrationPage from './Pages/Registration/Registration';
import { useState, useEffect } from 'react';
import SellTicketPage from './Pages/SellTicket/SellTicket';
import LoginPage from './Pages/Login/Login';

function App() {
  const location = useLocation()
  const [sidebar, setSidebar] = useState(true)

  useEffect(()=> {
    if(
      location.pathname === '/registration' || 
      location.pathname === '/login' || 
      location.pathname === '/sellticket'
    ){
      setSidebar(false)
    }else {
      setSidebar(true)
    }
  }, [location])

  return (
    <>
    <Header />
    <section className='section'>
      {sidebar && <Sidebar />}
      <Routes>
        <Route path="/*" element={<EventPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </section>
    </>
  );
}

export default App;
