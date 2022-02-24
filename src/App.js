
import React from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";




function App() {

  return (
    <>
    <Router>
      <Navbar title="TextUtils" />
        <Routes>
             <Route exact path='/' element={<TextForm heading="Enter the text to analyze" />}/>
             <Route exact path='/About' element={<About/>}/>
        </Routes>
    </Router>
 

    </>


  );
}

export default App;

// <Navbar title="TextUtils" />
   
 
//     <TextForm heading="Enter the text to analyze" />