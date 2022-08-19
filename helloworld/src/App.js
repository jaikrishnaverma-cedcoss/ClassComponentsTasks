import logo from './logo.svg';
import ClassComp from './components/ClassComp';
import Template from './components/Template';
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
      </header>
    </div>
  );
}

export default App;
