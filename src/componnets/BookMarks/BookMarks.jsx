

const BookMarks = ({bookMark}) => {
    return (
        <div className="md:w-1/3">
            <h3 className="ml-10 mt-16  border py-2 rounded-md  font-semibold  bg-gray-600  text-white text-center ">BookMarks : {bookMark.length} </h3>
        </div>
    );
};

export default BookMarks;