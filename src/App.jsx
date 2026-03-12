import './App.css'
import Todo from './Todo.jsx'
import Name from './name.jsx'
import Student from './student.jsx'
import Libray from './Libray.jsx'

// 1. App Component: Sob component ekhane eksathe thakbe
function App() {
  const nam = ['Mosharof', 'Fahim', 'Muzahid', 'Rakib'];
  const student = [
    {id:1, name:'Rohim', age: 10},
    {id:2, name:'Korim', age:20}
  ];
  const books = [
    {id:1 , name:'JavaScript', price: 250},
    {id:2 , name:'Java', price: 280},
    {id:3 , name:'CSS', price: 50},
  ]
  return (
    <>
      <h1>React Core Concepts</h1>
      <Libray books={books}></Libray>
      {
        student.map(student => <Student student={student}key={student.id}></Student>)
      }
      {
        nam.map(nam => <Name nam={nam}></Name>)
      }



      {/* <Todo task="Learn React" isDone={true} time=''></Todo>
      <Todo task="Learn JavaScript" isDone={false} time=''></Todo>
      <Todo task="Learn Java" isDone={true} time={time}></Todo>
      <Student></Student>
      <Developer name='Mosharof' tech='JavaScript'></Developer>
      <Player nam="Mosharof" runs="400"></Player> */}

      

      
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
function tudent() {
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