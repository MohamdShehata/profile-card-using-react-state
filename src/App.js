import React from 'react';
import './App.css';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  Person = {
    fullName: "Mohamed Shehata",
    bio: " “ Work in the dark to serve the light.” ",
    profession: "React Js"

  }
  render() {


    return (
      <div className="main-box">
        <div className="big-circle">
          <div className="small-circle">
          </div>
        </div>
        <div>
        {
         this.state.show?
         <div>         
          <div>
            <h2 className="heading-name">
              {this.Person.fullName}
            </h2>
          </div>
          <div>
            <h3 className="heading-name">
              {this.Person.profession}
            </h3>
          </div> 
         
             
          <p className="info">
            {this.Person.bio}
          </p>
          </div> : null
              }
        </div>
        <button className="follow_btn" onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'}Details</button>


      </div>)

  }
}





export default App;
