import logo from './logo.svg';
import ClassComp from './components/ClassComp';
import './App.css';
// Q1. a. Make a class component as a child of App.js and print Hello world!. 
// Try using named and default exports.
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <ClassComp />
      </header>
    </div>
  );
}

export default App;
