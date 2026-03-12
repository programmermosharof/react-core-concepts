import './App.css'

// 1. App Component: Sob component ekhane eksathe thakbe
function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
     
      <Student />
      <Developer name='Mosharof' tech='JavaScript' />
      <Player nam="Mosharof" runs="400" />
    </>
  )
}


function Player({ nam, runs }) {
  return (
    <div className='card' style={{ border: '2px solid orange', margin: '10px', padding: '10px', borderRadius: '15px' }}>
      <h3>Name: {nam}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}


function Developer(props) {
  return (
    <div style={{ border: '2px solid red', margin: '10px', padding: '10px', borderRadius: "15px" }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

// 4. Person Component


// 5. Student Component
function Student() {
  const name = "Mosharof";
  const age = 22;
  return (
    <div style={{ border: '1px solid green', margin: '10px', padding: '10px', borderRadius: "15px" }}>
      <h3>Student Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  )
}

export default App