import React from 'react';
import { Home, Create, Edit } from '../pages';
import { Route, Switch } from 'react-router-dom';
import { Ghost } from 'react-kawaii'
import './styles/404notFound.css'

export function Routes(){
    return(
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/edit/:id">
          <Edit />
        </Route>
        <Route> 
          <div className="notFound">
            <Ghost className="ghost" size={150} mood="ko" color="#e7f3f5" />
            404 not found. This page doesn't exist. Please go back home! It's spooky here.
            <Ghost className="ghost" size={150} mood="ko" color="#f3f5e7" />
          </div>
            
        </Route>
        </Switch>
    );
}