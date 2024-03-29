import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider"
import { Link } from "react-router-dom";
import Image from "next/image";

const ProfileContent = ({d}) => {
    const {user}=useContext(AuthContext)
    return (
        < >
  
       
        
        <div className="stat">
          
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Payment done</div>
          <div className="stat-desc text-secondary">
            <Link to={`/dashboard/update/${d?._id}`}>
            <button className="btn btn-sm mt-3">Edit Profile</button>
            </Link>
            
          </div>
        </div>

        <div className="stat">
        <div className="stat-figure text-secondary mt-3">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image alt="" src={user?.photoURL} />
              </div>
            </div>
            <p>{d?.name}</p>
          </div>
          <div className="stat-title">Contact Info</div>
          <p className=" ">Email:{user?.email}</p>
          <p className=" ">Phone:{d?.candidatePhone}</p>
          <p className="">Address:{d?.address}</p>
        </div>
        
     
        
      </>
    );
};

export default ProfileContent;