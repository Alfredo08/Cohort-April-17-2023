import React, {Component} from 'react';
import './App.css';
import Student from './components/Student';
import Dog from './components/Dog';
import axios from 'axios';

class App extends Component{
  // this.addOneToCount = this.addOneToCount.bind(this);
  state = {
    students: [{
      firstName: 'Alex',
      lastName: 'Miller',
      age: 25
    },
    {
      firstName: 'Martha',
      lastName: 'Smith',
      age: 24
    },
    {
      firstName: 'Roger',
      lastName: 'Anderson',
      age: 30
    }],
    title: 'Lighthouse Web Development Course',
    count: 0,
    dogImages: []
  }
  /* Equivalent to functional components and hooks 
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Miller");
  const [age, setAge] = useState(25);
  */


  addOneToCount = () => { 
    let currentCount = this.state.count;
    currentCount ++;

    this.setState({
      count: currentCount 
    });
  }

  addStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      age: Number(event.target.age.value)
    }

    event.target.firstName.value = "";
    event.target.lastName.value = "";
    event.target.age.value = "";
    // const currentStudents = this.state.students;
    // currentStudents.push(newStudent);
    this.setState({
      students: [...this.state.students, newStudent]
    });
  }

  componentDidMount = () => {
    console.log("This happens only once after the initial load of the React App.");
    
    axios.get("https://dog.ceo/api/breeds/image/random/5")
      .then((response) => {
        console.log(response);
        this.setState({
          dogImages: response.data.message
        });
      });
  }

  render = () => {
    //console.log("How many times will this come up?");
    return(
      <div>
        <h1>
          Hey there, welcome to the {this.state.title} students app! {this.props.message} - {this.props.num}.
        </h1>
        
        {this.state.students.map((student, index) => {
          return (
            <Student firstName={student.firstName} 
                     lastName={student.lastName}
                     age={student.age}
                     key={index} />
          )
        })}

        <h3>Counter button</h3>
        <p> Count so far: {this.state.count}</p>
        <div>
          <button onClick={this.addOneToCount}>
            Add a unit to the count
          </button>
        </div>
        <form onSubmit={this.addStudent}>
          <div>
            <label htmlFor="firstName">
              First name:
            </label>
            <input id="firstName" name="firstName" />
          </div>

          <div>
            <label htmlFor="lastName">
              Last name:
            </label>
            <input id="lastName" name="lastName" />
          </div>

          <div>
            <label htmlFor="age">
              Age:
            </label>
            <input id="age" name="age" />
          </div>
          <button type="submit">
            Add student
          </button>
        </form>
        <h2> Dog images from the API </h2>
        {this.state.dogImages.map((dogUrl, index) => {
          return (<Dog dogUrl={dogUrl} key={index}/>)
        })}
      </div>
    );
  }
}

export default App;
