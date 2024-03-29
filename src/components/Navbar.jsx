"use client";
import logo from'../assets/collegebooker-low-resolution-logo-black-on-transparent-background.png'

import Swal from 'sweetalert2';
import Image from 'next/image';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';





const Navbar = () => {
  // const {  logout } = useAuth();
  // const { uid, displayName, photoURL } = user || {};
  // const handleLogOut = () => {
  //   logout()
  //     .then(()=>{
  //       Swal.fire({
  //         title: 'success!',
  //         text: 'Logout Succesfull',
  //         icon: 'success',
  //         confirmButtonText: 'Ok'
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
    const navRoutes = (
        <>
          <li>
            <Link className=" font-bold" href="/">Home</Link>
          </li>
          <li>
            <Link href="/colleges"  className=" font-bold">Colleges</Link>
          </li>
   
           <li> <Link href="/admission" className=" font-bold">Admission</Link>
          </li>
          <li>
            <Link href="/myCollege" className=" font-bold">My College</Link>
          </li> 
          <li>
          {/* onClick={handleLogOut} */}
          {/* {user?
           <button  className="">LogOut</button>
         : <Link to="/login" className="">Login</Link>
         } */}
         <p  className="">Login</p>
          </li> 
        <Link href="/dashboard">
        <div className='flex items-center justify-center '>
        <div>
            <p className='mb-3 mr-2'>Rayhan</p>
          </div>
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
          
        <div className="w-10  rounded-full">
          <Image alt='' src="" className='' />
        </div>
        </div>
        
      </div>
        </Link>
      
        </>
      );

    return (
        <div className="navbar bg-primary mb-3 bg-gradient-to-r from-red-700 to green-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navRoutes}
            </ul>
          </div>
          <Image src={logo} alt='' className="btn btn-ghost normal-case text-xl w-36"/>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1 text-white">
          {navRoutes}
          </ul>
      

        </div>
      </div>
    );
};

export default Navbar;