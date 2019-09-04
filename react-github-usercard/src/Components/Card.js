import React, { Component } from 'react';
import styled from "styled-components"
import axios from "axios";

import { CardBase, AppHeader, H2, Img, Button, CardFooter, Users, PageDiv, H1 } from "./Styles";



//////////////////
/////////////
////////////////


class Card extends Component{

    constructor(){
        super();
        this.state={
           users: [],
           urls: []
        };
      }

      componentDidMount(){
        axios.get("https://api.github.com/users/lindseycason/followers")
        .then(res=>{
            this.setState({ 
            users: res.data});
        })
        .catch(err => {
            console.log(err);
        })
      }
    
    
      render(){

        
      return (
        <Users>
          <AppHeader>
            <H2>Lindsey's Followers</H2>
              <PageDiv>
                  {this.state.users.map(user=>{
                    return (
                    <CardBase>
                      <div key={user.id}>
                          <Img src={user.avatar_url} />
                      </div>
                        <CardFooter>
                          <div className="FooterText">
                            <H1>Followers: {user.followers_url.length}</H1>
                            <H1>Following: {user.following_url.length}</H1>
                            <H1>Username: {user.login}</H1>
                          </div>
                          <div className="FooterButton">
                            <Button><a href={user.html_url}>GitHub</a></Button>
                          </div>
                      </CardFooter>
                    </CardBase>
                    )
                  })}
              </PageDiv>
          </AppHeader>
        </Users>
      );
      }


}

export default Card;  



//
// Below is attempting to get deeper information per user





// componentDidMount(){
      //   axios.get("https://api.github.com/users/lindseycason/followers")
      //   .then(res=>{
      //     console.log(res.data)
      //     let myArray=(res.data);
      //     let newArr=[];
      //     myArray.map(user=>{
      //       // console.log(user.url)
      //       newArr.push(user.url);
      //       console.log("newArr", newArr)})

      //       newArr.map(url=>{
      //       axios.get(url)
      //         .then(response2=>{
      //           console.log("response2 data",response2)
      //           this.setState({
      //             users: response2.data
      //           })
      //           console.log("users info", this.state.users)
      //         })
      //       })
          
      //   })
      //   .catch(err => {
      //       console.log(err);
      //   })
      // }