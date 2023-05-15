import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookService from '../service/BookService';

const CreateBookComponent = () => {
    const [bookTitle, setbookTitle] = useState('');
    const [bookPrice, setbookPrice] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateBook = (e) => {
        e.preventDefault();
        const book = {bookTitle, bookPrice}
        if(id){
            BookService.updateBook(id, book).then((response) => {
                navigate('/books')
            }).catch((err) => {
                console.log(err)
            });
        }else{
            BookService.createBook(book).then((response) => {
                navigate('/books')
                console.log(response.data)
            }).catch((err) => {
                console.log(err)
            });
        }
    }
    useEffect(() => {
        BookService.getBookbyId(id).then((response) => {
            setbookTitle(response.data.bookTitle);
            setbookPrice(response.data.bookPrice);
            
        }).catch((err) => {
            console.log(err)
        });
    }, [id]);

    const title = () => {
        if(id) {
            return <h2 className='text-center'>Update Book</h2>
        }else{
            return <h2 className='text-center'>Create Book</h2>
        }
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Book Title :</label>
                                <input
                                type="text"
                                placeholder="Enter Book Title"
                                name='bookTitle'
                                className='form-control'
                                value={bookTitle}
                                onChange = {(e) => setbookTitle(e.target.value)}
                                >
                                </input>
                            </div>
                              <div className='form-group mb-2'>
                                  <label className='form-label'>Book Price :</label>
                                  <input
                                      type="text"
                                      placeholder="Enter Book Price"
                                      name='bookPrice'
                                      className='form-control'
                                      value={bookPrice}
                                      onChange={(e) => setbookPrice(e.target.value)}
                                  >
                                  </input>
                              </div>
                              <button className='btn btn-success' onClick={(e) => saveOrUpdateBook(e)}>Submit</button>
                              <Link to="/books" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateBookComponent