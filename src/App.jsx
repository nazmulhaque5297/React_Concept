
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import StartUp from './page/startUp';
function App() {
    
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<StartUp/>} />
      </Routes>
    </Router>
  );
}

export default App;



