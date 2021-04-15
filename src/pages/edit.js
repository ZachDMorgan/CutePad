import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { getItem, setItem, setSessionItem, getSessionItem } from '../services/storage';
import './styles/edit.css'
import { Backpack } from 'react-kawaii'
import { Button } from '../components'

export function Edit() {

  //error messages
  let emptyTitle = "Put a title in me please!";
  let emptyContent = "Put content in me please!";  

  //get the note out of local storage from the url
  let location = useLocation();
  let locationSplit = location.pathname.split("/");
  let id = locationSplit[locationSplit.length-1];
  let note = getItem(id, {Title:"", Content:""});
  
  //Back button
  const history = useHistory();
  const onBackClick = () => {
    sessionStorage.clear();
    history.push("/");
  }
  //get session value if it exists, else get local storage value
  let sessionTitle = getSessionItem("title","");
  let sessionContent = getSessionItem("content","");
  if (sessionTitle === ""){
    sessionTitle = note.Title;
  }
  if (sessionContent === ""){
    sessionContent = note.Content;
  }
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

  //terrible function that checks if title and content are filled in and gives error messages if they aren't. Routes home and clears session storage on success
  function submitEdit() {
    //boolian to see if something's wrong
    let exeption = false;
    //check title
    let titleSubmit = getSessionItem("title", "");
    if (titleSubmit === "") {
      //check local storage in case user clears it in edit screen
      if (note.Title === "") {
        alert(emptyTitle);
        exeption = true;
      }
      else {
        titleSubmit = note.Title;
      }
    }
    //check content
    let contentSubmit = getSessionItem("content", "");
    if (contentSubmit === "") {
      //check local storage in case user clears it in edit screen
      if (note.Content === "") {
        alert(emptyContent);
        exeption = true;
      }
      else {
        contentSubmit = note.Content;
      }
    }
    //success
    if(exeption===false){
      let editedNote = { Title: titleSubmit, Content: contentSubmit };
      setItem(id, editedNote);
      sessionStorage.clear();
      history.push('/');
    }
  }

  return (
    <div>
      {/* Back button and page title */}
      <div className="flexWrapper clearfix">
        <div className="lineElements lineElements-1">
          <Button title="back" onClick={onBackClick} variant="back"/>
        </div>
        <div className="lineElements lineElements-2 editNote">
          <h1 >Edit Note!</h1>
        </div>
      </div>

      {/* edit note inputs */}
      <form>
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
          <Button title="Submit" onClick={submitEdit} variant="submit" />
        </div>
      </form>
      

    </div>

  );
}
