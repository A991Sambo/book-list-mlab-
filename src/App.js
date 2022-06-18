import logo from './logo.svg';
import './App.css';
import {Icon} from "react-icons-kit" // to be removed
import {Button} from 'bootstrap'
import React, { useState, useEffect } from 'react';
import { View } from './components/View';

const getDatafromLS = () => {
  const data = localStorage.getItem('Books');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}


function App() {

  const [Books, setBooks] = useState(getDatafromLS());

  const [Title, setTitle] = useState('');
  const [BookAuthor, setBookAuthor] = useState('');
  const [R, setR] = useState('');

  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    let Book = {
      Title,
      BookAuthor,
      R,
    }
    setBooks([...Books, Book]);
    setTitle('');
    setBookAuthor('');
    setR('');
  }

  const deleteBook=(R)=>{
    const filteredBooks=Books.filter((element, index)=>{
      return element.R !== R
    })
    setBooks(filteredBooks);
  }



  useEffect(() => {
    localStorage.setItem('Books', JSON.stringify(Books));
  }, [Books])

  return (
    <div className="wrapper">
      <h1>BOOKLIST</h1>
      <p><b>WELCOME TO OUR ONLINE STORE</b></p>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete='off' className='form-group'
            onSubmit={handleAddBookSubmit} >

            <label>Title</label>
            <input type="text" className='form-control' required placeholder='ENTER BOOK TITLE'
              onChange={(e) => setTitle(e.target.value)} value={Title}></input>
            <br>
            </br>
            <label>Book Author</label>
            <input type="text" className='form-control' required placeholder='ENTER BOOK AUTHOR'
              onChange={(e) => setBookAuthor(e.target.value)} value={BookAuthor}></input>
            <br>
            </br>
            <label>R</label>
            <input type="text" className='form-control' required placeholder='ENTER AMOUNT '
              onChange={(e) => setR(e.target.value)} value={R}></input>
            <br>
            </br>
            <button type="submit" className='btn btn-success btn-md'><b>Add Book</b></button>
          </form>
        </div>

        <div className='view-container'>
          {Books.length >0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>R</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className='sam'>
                  <View Books={Books} deleteBooks={deleteBook} />
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setBooks([])}><b>REMOVE ALL</b></button>
          </>}
          {Books.length < 1 && <div><b>NO BOOKS  ADDED YET</b></div>}
        </div>

      </div>
    </div>
  );
}

export default App;
