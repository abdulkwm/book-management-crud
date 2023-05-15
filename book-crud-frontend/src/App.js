import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListBookComponent from './components/ListBookComponent';
import CreateBookComponent from './components/CreateBookComponent';
import ViewBookComponent from './components/ViewBookComponent';

function App() {
  return (
    <div>
     <Router>
      <HeaderComponent></HeaderComponent>
      <div className='container'>
        <Routes>
          <Route exact path='/' Component={ListBookComponent}></Route>
            <Route path='/books' Component={ListBookComponent}></Route>
            <Route path='/add-book' Component={CreateBookComponent}></Route>
            <Route path='/edit-book/:id' Component={CreateBookComponent}></Route>
            <Route path='/view-student/:id' Component={ViewBookComponent}></Route>
        </Routes>
      </div>
      <FooterComponent></FooterComponent>
     </Router>
    </div>
  );
}

export default App;
