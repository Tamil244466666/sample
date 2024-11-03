
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Createbook from './pages/Createbook';
import Home from './pages/Home';
import Deletebook from './pages/Deletebook';
import Editbook from './pages/Editbook';
import Viewbook from './pages/Viewbook.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/book/create' element={<Createbook/>} />
        <Route path='/book/detail/:id' element={<Viewbook/>} />
        <Route path='/book/edit/:id' element={<Editbook/>} />
        <Route path='/book/delete/:id' element={<Deletebook/>} />
      </Routes>
   

    </div>
  );
}

export default App;
