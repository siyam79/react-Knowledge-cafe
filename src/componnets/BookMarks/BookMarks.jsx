
import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
// import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMark}) => {
    return (
        <div className="md:w-1/3 ml-10 mt-16  bg-gray-400  ">
            <h3 className=" mt-2 border py-2  rounded-md  font-semibold  bg-gray-600  text-white text-center ">BookMarks : {bookMark.length} </h3>

            {
                bookMark.map(bookMark=> <BookMark key={bookMark.id} bookmark={bookMark}></BookMark>)
            }
            
        </div>
    );
};

BookMarks.propTypes = {
    bookMark: PropTypes.array
};

export default BookMarks;

