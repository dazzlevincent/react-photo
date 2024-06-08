import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import DeletePhoto from './components/DeletePhoto';
import SearchPhoto from './components/SearchPhoto';
import ViewPhoto from './components/ViewPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddPhoto/>}/>
  <Route path='/DeletePhoto' element={<DeletePhoto/>}/>
  <Route path='/SearchPhoto' element={<SearchPhoto/>}/>
  <Route path='/ViewPhoto' element={<ViewPhoto/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
