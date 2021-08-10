import logo from './logo.svg';
import React from 'react';
import './App.css';


const PostContainer = ({users}) => {

	return (
		<div class="container1"> 
            {
              users.map((curr) => {
                return (
                    <div>
                        <div class="div1">
                          <img class="img" src={curr.img} alt="pic"/>
                        </div>
                        <div class="div2">
                            <tr> Name: <b>{curr.name}</b>  </tr>
                            <tr> Date of Birth: <b>{curr.birthday}</b>  </tr>
                            <tr> Occupation:  <b> 
                                                {
                                                  curr.occupation.map((member, index) => {
                                                    if(index==curr.occupation.length-1) 
                                                      return <text key={index}> { member }  </text>
                                                    else
                                                      return <text key={index}>  { member } ,  </text>
                                                  })
                                                }
                                              </b>
                            </tr>
                            <tr> Status: <b>{curr.status}</b>  </tr>
                            <tr> Nickname: <b>{curr.nickname}</b>  </tr>
                            <tr> Portrayed Character: <b>{curr.portrayed}</b>  </tr>
                            <tr> Seasons: <b>
                                            {
                                              curr.appearance.map((member,index) => {
                                                if(index==curr.appearance.length-1) 
                                                  return <text key={index}> { member }  </text>
                                                else
                                                  return <text key={index}>  { member } ,  </text>
                                              })
                                            }
                                          </b>  
                            </tr>
                            <tr> Quotes: <text class="quotes">{curr.newindex} </text></tr>
                        </div>
                    </div>
                  )
              })
            }
          </div>
		)
}
export default PostContainer;