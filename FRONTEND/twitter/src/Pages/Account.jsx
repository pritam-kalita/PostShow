import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";




const Account = () => {
  const navigate = useNavigate();
  const [tweet, setTweet] = useState('')
  const [tag, setTag] = useState('@')

  const handleTagChange = (e) => {
    let value = e.target.value
    if (!value.startsWith('@')) {
      value = '@' + value.replace(/@/g, '')
    }
    setTag(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    

    const postData = {
    tweet: tweet,
    tag: tag
  }
  
    axios.post("http://localhost:3000/create-tweet", postData)
    .then((res)=>{
      console.log(res);
      
    })
    .catch((err)=>{
      console.log(err);
      alert("Error Creating Post")
      
    })
    setTweet('')
    setTag('')
    navigate("/");
  }

  return (
    <div>
      <section className='tweet-form-section'>
        <form onSubmit={handleSubmit}>
          <textarea 
            className='tweet-input'
            placeholder='What is happening?'
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            required
          />
          <input 
            type='text'
            className='tag-input'
            placeholder='@tag'
            value={tag}
            onChange={handleTagChange}
            required
          />
          <button type='submit' className='submit-btn'>Post</button>
        </form>
      </section>
    </div>
  )
}

export default Account