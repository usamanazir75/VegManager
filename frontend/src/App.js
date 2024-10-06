import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import './App.css';
import Contact from './pages/Contact';
import MoreInfo from './pages/MoreInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsConditions';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<MoreInfo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  