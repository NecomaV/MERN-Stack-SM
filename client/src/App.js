import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import PageRender from './PageRender';

function App() {
  return (
    <Router>
      <div className="flex justify-center align-center h-screen bg-violet-200">

      <input type="checkbox" id="theme"  className="peer/hide hidden"  />
      
      <div className="peer-checked/hide:invert w-full min-h-screen ">
        <div className="max-w-5xl w-full m-auto">
        <Routes>
          <Route exact path="/:page/:id" element={<PageRender />} />
          <Route exact path="/:page" element={<PageRender />} />
        </Routes>
        </div>
      </div>
    </div>

    </Router>

  );
}

export default App;
