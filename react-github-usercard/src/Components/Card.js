import React, { Component } from 'react';
import styled from "styled-components"
import axios from "axios";



class Card extends Component{

    constructor(){
        super();
        this.state={
           users: []
        };
      }

      componentDidMount(){
        axios.get("https://api.github.com/users/lindseycason/followers")
        .then(res=>{
            console.log(res);
            this.setState({ users: res.data});
        })
        .catch(err => {
            console.log(err);
        })
      }
    
    
      render(){
      return (
        <div className="Card">
          <header className="Card-header">
          <h3>Lindsey's Followers</h3>

            <div className="users">
                {this.state.users.map(user=>(
                    <div className="userCard" key={user.id}>
                    <img src={user.avatar_url} />
                    <h3><a href={user.html_url}>GitHub</a></h3>
                    </div>
                ))}
            </div>
          </header>
        </div>
      );
      }


}

export default Card;