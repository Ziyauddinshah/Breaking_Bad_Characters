import logo from './logo.svg';
import React,{useState,useEffect,setState} from 'react';
// import axios from 'axios';
import './App.css';
import PostContainer from './postContainer';
import Pagination from './Pagination';



const UseEffectApi = () => {

  const [users, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);
  //  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [postsPerPage] = useState([10]);

  const getCharacters = async() => {
    const response =await fetch('https://www.breakingbadapi.com/api/characters');
    setCharacters(await response.json());
  }
  const getQuotes = async() => {
      const url = 'https://www.breakingbadapi.com/api/quotes';
      const response = await fetch(url);
      setQuotes(await response.json());
  }
  useEffect(() => {
    getCharacters();
    getQuotes();
  },[]);

  users.map((character) => {
    let quote = "";
    quotes.map((quotes) => {
      if(character.name==quotes.author) {
         quote = quote +' '+ quotes.quote+' ';
      }
    })
    character.newindex=quote;
  })
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentFetchPage = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
        <div class="maincontainer">

          <div class="upperdiv">
            <h1 class="startheading">Breaking Bad Characters</h1>
          </div>
          <div class="middiv">
            <PostContainer users={currentFetchPage} />
          </div>
          <div class="bottomdiv">
            <p >
              <Pagination postsPerPage={postsPerPage} 
                          totalPosts={users.length}
                          paginate={paginate}
                />
            </p>
          </div>
          <div class="bottomdiv1">
            <h1 class="startheading">Breaking Bad Characters Footer</h1>
          </div>

        </div>
    
        )
}

export default UseEffectApi;

//// <div class="container"> 
          //   {
          //     users.map((curr) => {
          //       return (
          //           <div>
          //               <div class="div1">
          //                 <img class="img" src={curr.img} alt="pic"/>
          //               </div>
          //               <div class="div2">
          //                   <tr> Name: <b>{curr.name}</b>  </tr>
          //                   <tr> Date of Birth: <b>{curr.birthday}</b>  </tr>
          //                   <tr> Occupation:  <b> 
          //                                       {
          //                                         curr.occupation.map((member, index) => {
          //                                           if(index==curr.occupation.length-1) 
          //                                             return <text key={index}> { member }  </text>
          //                                           else
          //                                             return <text key={index}>  { member } ,  </text>
          //                                         })
          //                                       }
          //                                     </b>
          //                   </tr>
          //                   <tr> Status: <b>{curr.status}</b>  </tr>
          //                   <tr> Nickname: <b>{curr.nickname}</b>  </tr>
          //                   <tr> Portrayed Character: <b>{curr.portrayed}</b>  </tr>
          //                   <tr> Seasons: <b>
          //                                   {
          //                                     curr.appearance.map((member,index) => {
          //                                       if(index==curr.appearance.length-1) 
          //                                         return <text key={index}> { member }  </text>
          //                                       else
          //                                         return <text key={index}>  { member } ,  </text>
          //                                     })
          //                                   }
          //                                 </b>  
          //                   </tr>
          //                   <tr> Quotes: <text class="quotes">{curr.newindex} </text></tr>
          //               </div>
          //           </div>
          //         )
          //     })
          //   }
          // </div>