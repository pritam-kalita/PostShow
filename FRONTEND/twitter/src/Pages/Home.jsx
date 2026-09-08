import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
   const [tweets, setTweet] = useState([{
    id:"",
    tweet:"",
    tag:""
   }])

   useEffect(()=>{
        axios.get("http://localhost:3000/get-tweet")
        .then((res)=>{
          console.log(res.data);
          setTweet(res.data.tweet)
          
        })
   },[])

  return (
    <div className='tweet-card'>

      {tweets.length > 0 ? (
        tweets.map((item) => (
          <div key={item.id}>
            <p className='tweetline'>{item.tweet}</p>
            <p className='tagline'>{item.tag}</p>
          </div>
        ))
      ) : (
        <div className='no-tweet'>
          <p>YOU HAVE NO TWEET</p>
        </div>
      )}
          
    </div>
  )
}

export default Home