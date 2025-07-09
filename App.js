import React from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


function App() {
  return (
    <>
    
    <Navbar tittle="Textutills"  aboutText="About Textutills"/> 
     <div className="container my-3">

     <TextForm heading="Enter the text analyze below"/>

     </div>
    
    </>
  );
}

export default App;
