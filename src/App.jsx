/* eslint-disable no-undef */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ScormProvider from 'react-scorm-provider';


import { Home } from './pages';

const App = () => {
  return (
    <ScormProvider version="1.2" debug={process.env.NODE_ENV !== 'production'} >
      <div>
          <main className="bg-slate-300/20">
              <Router>
                  <Routes>
                      <Route path="/" element={<Home />} />
                  </Routes>
              </Router>
          </main>
      </div>
    </ScormProvider>
  )
}

export default App