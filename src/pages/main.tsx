import { useEffect, useState } from 'react';
import '../styles/main.css';
import RadioInput from '../components/radioInp';
import { useFetch } from '../hooks/useFetch';
import { CircularProgress, Icon } from '@mui/material';
import Library from '../components/library';
import { LibraryType } from '../interfaces/book';
import AddBtn from '../components/addBtn';
import NewBookModal from '../components/NewBookModal';

function Main() {
  const [books, setBooks] = useState([])
  const [type, setType] = useState<LibraryType>("grid")
  const { loader, request } = useFetch()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = () => {
    request({
      url: 'https://superhero-search.p.rapidapi.com/api/villains'
    }).then(res => setBooks(res))
  }

  return (
    <div className='container'>
      <div className='flex justify-center'>
        <RadioInput
          onChange={(e: any) => setType(e.target.value)}
          defaultValue={type}
        />
      </div>
      {!loader ?
        <Library
          type={type}
          books={books}
        /> :
        <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
          <CircularProgress color="secondary" />
        </div>}
      <AddBtn
        className="fixed right-4 bottom-4 z-10 cursor-pointer"
        onClick={() => setModal(!modal)}
      />
      {modal && <NewBookModal
        handleClose={() => setModal(!modal)}
        getBooks={getBooks}
      />}
    </div>
  );
}

export default Main;
