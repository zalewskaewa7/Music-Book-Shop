import React from 'react'
import type { RootState, AppDispatch } from '../app/redux/store';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from "../app/redux/slice";



function Basket() {
  const {basketShop} = useSelector((state: RootState) => state.slice)
  const dispatch: AppDispatch = useDispatch()

  function remove(book:{name: string, quantity: number}){
    const quantity: number= book.quantity;
      const name: string = book.name;

    dispatch(removeBook({name , quantity}))
  }

  return (
    <div>
      {
        basketShop.map((book, index) => {
          return(
            <div key={book.name}> 
            <div >Ilość: {book.quantity}</div>
            <div>Nazwa książki: {book.name}
            <button onClick={() => remove(book)}>usuń</button></div>
            </div>
          )
        }

        )
      }
      
      
      
    </div>
    
    
  )
}

export default Basket