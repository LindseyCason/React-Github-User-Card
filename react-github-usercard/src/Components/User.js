// import React, { Component } from 'react';
// import styled from "styled-components"
// import axios from "axios";

// class User extends Component {

//     constructor(){
//       super();
//       this.state={
//         name: "",
//         location: "",
//         following: "",
//         image: ""
//       };
//     }
  
  
//     componentDidMount(){
//       axios.get("https://api.github.com/users/lindseycason")
//       .then(res=>{
//           console.log(res);
//           this.setState({
//             name: res.data.name,
//             location: res.data.location,
//             following: res.data.following,
//             image: res.data.avatar_url});
//           console.log(this.state.image)
//       })
//       .catch(err => {
//           console.log(err);
//       })
//     }
  
  
//     render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Welcome to the page of {this.state.name}</h1>
//           <img src={this.state.image} alt="Profile Picture of User" />
//           <h2>Location: {this.state.location}</h2>
//           <h3>Follwing: {this.state.following}</h3>
//         </header>
      
//       <section>
//         {/* <Card /> */}
//       </section>
//       </div>  
//     );
//     }
//   }

// export default User;