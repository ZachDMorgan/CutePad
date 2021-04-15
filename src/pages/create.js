import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '../components';
import { setItem, setSessionItem, getSessionItem } from '../services/storage';
import './styles/create.css'
import { Backpack } from 'react-kawaii'

export function Create() {
  //get history for back button
  const history = useHistory();
  //back button function
  const onBackClick = () => {
    sessionStorage.clear();
    history.push("/");
  }
  
  //error messages
  let emptyTitle = "Put a title in me please!";
  let emptyContent = "Put content in me please!";

  //get session value if it exists, else get default empty value
  let sessionTitle = getSessionItem("title","");
  let sessionContent = getSessionItem("content","");
  const [title, setTitle] = useState(sessionTitle)
  const [content, setContent] = useState(sessionContent);

  //input on change events
  function onTitleChange(event){
    let value = event.target.value;
    setTitle(value)
    setSessionItem('title', value)
  }
  function onContentChange(event){
    let value = event.target.value;
    setContent(value)
    setSessionItem('content', value)
  }

  //bad function that checks if title and content are filled in and gives error messages if they aren't. Routes home and clears session storage on success
  function submitNote () {
    //check title
    let titleSubmit = getSessionItem("title","");
    if(titleSubmit ===""){
      alert(emptyTitle);
    }
    //then content
    else{
      let contentSubmit = getSessionItem("content","");
      if(contentSubmit ===""){
        alert(emptyContent);
      }
      //success
      else{
        let newNote = { Title: titleSubmit, Content: contentSubmit };
        setItem(localStorage.length+1, newNote);
        sessionStorage.clear();
        history.push('/');
      }
    }
  }

  return (
    <div>
      {/* Back button and page title */}
      <div className="flexWrapper">
        <div className="lineElements lineElements-1">
          <Button title="back" onClick={onBackClick} variant="back" />
        </div>
        <div className="lineElements lineElements-2 newNote">
          <h1 >New Note!</h1>
        </div>
      </div>

      {/* new note inputs */}
      <form >
        {/* Title */}
        <div className="flexWrapper">
          <div className="lineElements lineElements-1">
            <h2>Title: </h2>
          </div>
          <div className="lineElements lineElements-2">
            <input type='text' placeholder={emptyTitle} value={title} onChange={onTitleChange} />
          </div>
        </div>
        {/* Content */}
        <div className="flexWrapper">
          <div className="lineElements lineElements-1">
            <h2>Content: </h2>
            <Backpack size={100} mood="excited" color=" #AFE3CE" />
          </div>
          <div className="lineElements lineElements-2 ">
            <textarea className="contentInput" type='text' placeholder={emptyContent} value={content} onChange={onContentChange} />
          </div>
        </div>
        {/* Submit button */}
        <div className="submit">
          <Button title="Submit" onClick={submitNote} variant="submit" />
        </div>
      </form>


    </div>
  );
}
