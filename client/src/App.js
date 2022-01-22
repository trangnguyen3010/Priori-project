import './App.css';

function App() {
  function testFn(){
    fetch("/api/test")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const testData = {info : "testString"}
  function sendData(){
    fetch("/api/newData", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    })
    .then((res) => res.json())
    .then((data) => console.log("Sent data"))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Open browser console and click the button below. Console should print "testing stuff" on click</p>
        <button onClick={testFn}>Test button</button>

        <button onClick={sendData}>Click to send data to back end</button>
      </header>
    </div>
  );
}

export default App;
