
import { useState } from 'react'
import './App.css'
import Blogs from './componnets/Blogs/Blogs'
import BookMarks from './componnets/BookMarks/BookMarks'
import Header from './componnets/Header/Header'

function App() {


  const [bookMark, setBookMark] = useState([])

  const handleAddToBookMark = blog => {

    const newBookMarks = [...bookMark, blog];
    setBookMark(newBookMarks);

  }


  return (
    <>

      <Header></Header>


      <div className='w-[70%] mx-auto mt-10 '>
        <div className=' md:flex '>
          <Blogs handleAddToBookMark={handleAddToBookMark} ></Blogs>
          <BookMarks bookMark={bookMark} ></BookMarks>
        </div>
      </div>

    </>
  )
}

export default App
