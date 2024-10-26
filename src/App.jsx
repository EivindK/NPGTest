/* eslint-disable no-undef */
import ScormProvider from 'react-scorm-provider';


import { Home } from './pages';

const App = () => {
  return (
    <ScormProvider version="1.2" debug={process.env.NODE_ENV !== 'production'} >
      <div>
          <main className="bg-slate-300/20">
            <Home />
          </main>
      </div>
    </ScormProvider>
  )
}

export default App