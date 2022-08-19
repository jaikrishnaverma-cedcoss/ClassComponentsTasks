import ClassComp from './components/ClassComp';
import Template from './components/Template';
import Template2 from './components/Template2';
import CardComponent from './components/CardComponent';
import MobileManufacturfers from './components/MobileManufacturfers';
import MobileOs from './components/MobileOs';

import './App.css';
// Q1. a. Make a class component as a child of App.js and print Hello world!. 
// Try using named and default exports.
// Q3. Make the following component structure using class components.
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <ClassComp />
         <h1>Q2. Print the following data with two components MobileOS and MobileManufacturers using class components.</h1>
         <MobileOs />
         <MobileManufacturfers />
         <h1>Q3. Make the following component structure using class </h1>
         <div className="header">
         <Template/>
         </div>
         <h1>Q4. Make the component structure as given in the attachment.</h1>
         <Template2/>
         <h1>Q5. Make the following design as shown.</h1>
         <div className='row final'>
         <CardComponent image="t1.jpg" title="Console"/>
         <CardComponent image="t2.jpg" title="Playground"/>
         <CardComponent image="t3.jpg" title="Adventure"/>
         </div>
      </header>
    </div>
  );
}

export default App;
