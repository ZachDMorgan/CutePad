import React from 'react'
import { Button } from './'
import { clearAll } from '../services/storage'
import { Ghost, IceCream, Planet } from 'react-kawaii'
import './styles/header.css'

export function Header(){
    return (


    <header className="flexContainer">
        <div className="noteContainer">
        <div className="ghost">
            <IceCream size={120} mood="blissful" color="#D0EBB5" />
        </div>
        {/* The title with kawaii lettering */}
        <h1 className="title">
            <span className="notepad">
                N
                <span className="noteContainer" >
                    <Planet size={40} mood="happy" color="#B0B1E6" />
                </span>
                tepad 
            </span>
            <span className="app">     
                <span className="noteContainer capital" >
                    <Ghost size={60} mood="lovestruck" color="#88C9C8" />
                </span>
                pp
            </span>
        </h1>
        {/* clear all button */}
        <Button title="Clear All" onClick={clearAll} variant="clear" />
        </div> 
    </header>
    


    );}