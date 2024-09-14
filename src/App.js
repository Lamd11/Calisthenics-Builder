import  Button  from './components/button';
import Navbar from './components/navbar';
import './index.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CalisthenicsBuilder from './pages/calisthenics-builder'
import Progressions from './pages/progressions'
import Resources from './pages/resources'
import News from './pages/news'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<CalisthenicsBuilder />} />
          <Route path="/calisthenics-builder" element = {<CalisthenicsBuilder />} />
          <Route path="/progressions" element = {<Progressions />} />
          <Route path="/resources" element = {<Resources />} />
          <Route path="/news" element = {<News />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;