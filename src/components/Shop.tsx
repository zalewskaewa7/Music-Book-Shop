import React from 'react'
import "../App.css"

import type {  AppDispatch } from '../app/redux/store';
import {  useDispatch } from 'react-redux';

import { addBook } from "../app/redux/slice";

function Shop() {
  const dispatch: AppDispatch = useDispatch()
 

    const books: {index: number, path: string, name: string}[] =[
        {"index" : 1, "path": "IMG/1.jpg", "name": "Kolorowe Pianino 1. Piosenki dla dzieci"},
        {"index" : 2, "path": "IMG/2.jpg", "name": "Kolorowe Pianino 2. Piosenki dla dzieci"}, 
        {"index" : 3, "path": "IMG/3.jpg", "name": "Kolorowe Pianino 3. Piosenki dla dzieci"}, 
        {"index" : 4, "path": "IMG/4.jpg", "name": "Kolorowe Pianino 4. Kolędy i piosenki świąteczne"}, 
      
    ]

    function addProduct(book:{index: number, path: string, name: string}){
      const inputElement = document.getElementById(book.name) as HTMLInputElement;
      const quantity: number= parseInt(inputElement.value);
      const name: string = book.name;

       dispatch(addBook({name , quantity}))
    }

  return (
    <div>
        <h1>Witamy w księgarni muzycznej Music Box</h1>
<div className="bookConteiner">
       { books.map(
            (book, index)=> {

return(
  <div className="bookElement" key={index}>
     <img src={book.path} alt="music for play piano" className="musicBook"></img>
        <div> 
          25 zł/sztuka
        </div>
        <div>
          ilość: 
          <input type="number" defaultValue={1} min="0" className="quantityBook" id={book.name}></input>
        </div>
        <button onClick={()=>addProduct(book)}>Dodaj do koszyka</button>
</div>
        )    
        
        })
}
</div>
    </div>
  )
}

export default Shop