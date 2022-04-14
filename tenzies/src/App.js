import './App.css';
import NumberData from './components/NumberData'

function App() {
  return (
    <div className="App">
      <div className='App-MainBlock'>
        <h1 className='App-MainBlock-h1'>Tenzies Project</h1>
        <p className='App-MainBlock-p'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <NumberData></NumberData>
      </div>
    </div>
  );
}

export default App;
