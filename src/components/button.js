import React from 'react'
import { Cat, File, Folder, Mug, Chocolate } from 'react-kawaii'
import './styles/button.css'

export function Button({title, onClick, variant}) {
    //variables to put different react-kawaii in the buttons
    var kawaii = "";
    var superKawaii="";
    
    //variable that lets me customise the buttons
    let className = "button-base"

    //find what kind of button it is and add relevant css/kawaii
    if(variant === "clear"){
        className+= " button-clear-all";
        kawaii = <Cat size={120} mood="shocked" color="#F8BB7C" />
    } else if(variant === "delete"){
        className+= " button-delete";
        kawaii = <File size={50} mood="ko" color="#F3CEE8" />
    } else if(variant === "back"){
        className+= " button-back";
        kawaii = <Folder size={50} mood="shocked" color="#AC68D7" />
    } else if(variant === "submit"){
        className+= " button-submit";
        kawaii = <Mug className="submitIcon" size={50} mood="lovestruck" color="#F4C4A9" />;
        superKawaii = <Chocolate className="submitIcon choco" size={50} mood="blissful" color="#96D470" />;
    }

    

    return (
        <button className={className} onClick={onClick}>
            {kawaii}{title}{superKawaii}
        </button>
    );
}