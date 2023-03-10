import React, {Fragment} from 'react';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Testimonial from './pages/Testimonial/Testimonial';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={
        <Fragment>
        <Nav/>
        <Home/>
        </Fragment> } />
        
        <Route path='/about' element={
        <Fragment>
        <Nav/>
        <About/>
        </Fragment> } />

        <Route path='/contact' element={
        <Fragment>
        <Nav/>
        <Contact/>
        </Fragment> } />

        <Route path='/testimonial' element={
        <Fragment>
        <Nav/>
        <Testimonial/>
        </Fragment> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
