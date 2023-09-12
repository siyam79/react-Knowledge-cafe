
import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className=' w-[90%] mx-auto items-center mt-8 py-2 border-b-2'>
             <div className=' flex justify-between '>
             <h1 className=' text-3xl font-bold  '>Knowledge Cafe </h1>
             <img src={profile} alt="" />
           
             </div>
        </div>
    );
};

export default Header;