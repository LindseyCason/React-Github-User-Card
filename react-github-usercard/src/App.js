import React, { Component } from 'react';
import styled from "styled-components"
import './App.css';
import Card from "./Components/Card"
import axios from "axios";
import { H1, H2, Img, Button, AppHeader, CardFooter, PageDiv, CardLindsey }  from "./Components/Styles"


class App extends Component {

  constructor(){
    super();
    this.state={
      name: "",
      location: "",
      following: "",
      image: ""
    };
  }


  componentDidMount(){
    axios.get("https://api.github.com/users/lindseycason")
    .then(res=>{
        // console.log(res);
        this.setState({
          name: res.data.name,
          location: res.data.location,
          following: res.data.following,
          image: res.data.avatar_url});
        // console.log(this.state.image)
    })
    .catch(err => {
        console.log(err);
    })
  }


  render(){
  return (
    <div>
      <AppHeader>
        <PageDiv>
        <CardLindsey>
            <H2>{this.state.name}</H2>
            <Img src={this.state.image} alt="Profile Picture of User" />
                <CardFooter>
                <H1>Location: {this.state.location}</H1>
                <H1>Following: {this.state.following}</H1>
                <H1>Followers: {this.state.followers}</H1>
                <Button><a href ={this.state.url}>GitHub</a></Button>
                </CardFooter>
                
        </CardLindsey>
      </PageDiv>
      </AppHeader>
    <hr></hr>
    <section>
      <Card />
    </section>
    </div>  
  );
  }














}

export default App;
