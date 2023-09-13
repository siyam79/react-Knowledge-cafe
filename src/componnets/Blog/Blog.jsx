
import PropTypes from 'prop-types';

import { IoBookmarksOutline} from 'react-icons/io5';

const Blog = ({ blog , handleAddToBookMark ,  handleMarkAsRead }) => {

    const { title, cover, author_img, author, posted_date, reading_time , hashtags} = blog

    return (
        <div className=' space-y-6 '>
            <img className=' w-full rounded-lg mt-8 ' src={cover} alt="" />
            <div className=' flex justify-between '>
                <div className=' flex '>
                    <img className=' w-14 ' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h1 className='font-bold text-xl '> {author} </h1>
                        <p className=' font-medium '>{posted_date} </p>
                    </div>
                </div>
                <div className=' items-center  '>
                    <span className=' font-semibold '> {reading_time} Min Read</span>
                    <button onClick={()=> handleAddToBookMark(blog)} className='ml-2 '> <IoBookmarksOutline></IoBookmarksOutline> </button>

                </div>
            </div>
            <h3 className="text-3xl font-semibold ">{title}</h3>
            <p className=' space-x-2 '>
                {
                    hashtags.map((hash , indx) => <span key={indx}> <a href="">#{hash}</a> </span> )
                }
            </p>
                <button
                onClick={()=> handleMarkAsRead (reading_time)}
                 className=' underline text-red-600 text-lg font-semibold  '>Mark As Read </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark :PropTypes.func,
    handleMarkAsRead : PropTypes.func
   
   
  
}

export default Blog;