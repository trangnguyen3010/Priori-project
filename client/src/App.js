import logo from './logo.svg';
import './App.css';

function App() {
  function testFn(){
    fetch("/api/test")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Open browser console and click the button below. Console should print "testing stuff" on click</p>
        <button onClick={testFn}>Test button</button>

      </header>
    </div>
  );
}

export default App;
