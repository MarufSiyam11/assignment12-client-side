import { Link } from 'react-router-dom';
import logoImg from '../../../assets/banner/bbc_news_14062.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
const Navbar = () => {
  const {user, logOut} =useContext(AuthContext);
  const handleLogOut =() =>{
  logOut()
  .then(() =>{})
  .catch(error => console.log(error))
  }
const navOptions = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="articles">All Articles</Link></li>

 
</>

    return (
        <>
          <div className="navbar fixed z-10 text-white max-w-screen-xl opacity-50 bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost  w-28 h-28"><img src={logoImg} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  {
            user ? <>
         
            <div className="avatar">
  <div className="w-12 h-12 m-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user.photoURL} />
  </div>
  <span>{user?.displayName}</span>
</div>

            
           
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </>:<>
            <li><Link to="login">LogIn</Link></li>
            </>
           }
  </div>
</div>
        </>
    );
};

export default Navbar;