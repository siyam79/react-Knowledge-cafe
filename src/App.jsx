
import './App.css'
import Blogs from './componnets/Blogs/Blogs'
import BookMarks from './componnets/BookMarks/BookMarks'
import Header from './componnets/Header/Header'

function App() {


  return (
    <>

      <Header></Header>


      <div className='w-[90%] mx-auto mt-10 '>
       <div className=' md:flex '>
       <Blogs></Blogs>
        <BookMarks></BookMarks>
       </div>
      </div>

    </>
  )
}

export default App
