import React from 'react'
import { Button } from './'
import { removeItem, setItem, getItem } from '../services/storage'
import { Link } from "react-router-dom";
import './styles/row.css'

export function Row(props){
    //variable for routing 
    let rowPath = `/edit/${props.id}`;

    //function for the delete button. Deletes this row
    function deleteRow () {
        for (let i = props.id; i < localStorage.length; i++) {
            setItem(i, getItem(i+1, {Title: "", Context: ""}));            
        }
        removeItem(localStorage.length);
    }

    return(
        
        <div className="row">
            <div className="rowText">
            <Link className="rowLink" to={rowPath}>
                <span className="id">
                    | Note: {props.id}
                </span>
                <span className="rowTitle">
                    | Title: {props.title}
                </span> 
            </Link>
            </div>
            <div className="button">
            <Button  title='Delete' onClick={deleteRow} variant="delete" />
            </div>
            
        </div>
    );
}
