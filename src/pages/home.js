import React from 'react';
import { Link } from "react-router-dom";
import { List } from '../components';
import './styles/home.css'

export function Home() {

    return(
        
        <div >
            <List/>
            <div className="home">
                <div className="centering">
                    <Link className="homeLink" to="/create">Create a note</Link>
                </div>
                
            </div>
        </div>
    );
}