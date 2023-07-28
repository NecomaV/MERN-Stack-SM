import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import PageRender from './PageRender';

function App() {
  return (
    <Router>
      <div className="h-screen">

      <input type="checkbox" id="theme"  className="peer/hide hidden"  />
      
      <div className="peer-checked/hide:invert w-full min-h-screen ">
        <div className="">
        <Routes>
          <Route exact path="/:page/:id" element={<PageRender />} />
          <Route exact path="/:page" element={<PageRender />} />
          <Route exact path="/" element={<Login/>} />

        </Routes>
        </div>
      </div>
    </div>

    </Router>

  );
}

export default App;
