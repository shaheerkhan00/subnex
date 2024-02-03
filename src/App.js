
import './App.css';
import Navbar from './common/Navbar';
import LandingPage from './pages/LandingPage';
import VendorsSignup from './pages/VendorsSignup';
import PlacedBid from './pages/PlacedBid';
import PostJob from './pages/PostJob';
import ShopDashboard from './pages/ShopDashboard';
import SlidingPage from './pages/SlidingPage';
import CompleWebsite from './pages/CompleWebsite';
import AppRoutes from './Routes/AppRoutes';
function App() {
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
