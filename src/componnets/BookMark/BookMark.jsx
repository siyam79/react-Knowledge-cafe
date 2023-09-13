
import PropTypes from 'prop-types';

const BookMark = ({ bookmark }) => {

    const { title } = bookmark;
    return (
        <div className='  bg-slate-200 mt-2  rounded-md '>
            <h3 className=' py-4 font-medium  text-center '>{title}</h3>
        </div>
    );
};


BookMark.propTypes = {
    bookmark: PropTypes.object

}
    

export default BookMark;