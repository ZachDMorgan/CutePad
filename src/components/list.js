import React from 'react'
import { getItem } from '../services/storage'
import { Row } from './'

export function List(){
    //make an array, fill it with local storage objects - starts at 1 instead of 0 like normal for display/key purposes
    let rowArray = [];
    for (let i = 1; i < localStorage.length+1; i++) {
        const row = getItem(i, { Title: "", Content:"" });
        rowArray.push(row);  
    }

    //map the array of objects to an array of row components
    const mappedRows = [];
    rowArray.forEach((x, index) => {
        mappedRows.push(
        <Row id={index + 1} title={x.Title} />)
    });


    return(
        <div>
            {mappedRows}
        </div>
    );
}