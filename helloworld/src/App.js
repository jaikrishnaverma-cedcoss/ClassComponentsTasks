import logo from './logo.svg';
import ClassComp from './components/ClassComp';
import MobileManufacturfers from './components/MobileManufacturfers';
import MobileOs from './components/MobileOs';

import './App.css';
// Q1. a. Make a class component as a child of App.js and print Hello world!. 
// Try using named and default exports.
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <ClassComp />
         <h1>Two components</h1>
         <MobileOs />
         <MobileManufacturfers />
      </header>
    </div>
  );
}

export default App;
