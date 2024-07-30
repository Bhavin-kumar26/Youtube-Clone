import React, { useState } from "react";
import upload from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import user_profile from "../assets/jack.png";
import seacrh from "../assets/search.png";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  
  return (
    <nav className=" flex items-center justify-around py-3 w-full h-15 sticky">
      <Link to={"/"}  className=" font-extrabold text-2xl tracking-widest">
        View<span className=" text-red-600 ">TV</span>{" "}
      </Link>
      <form onSubmit={handelSubmit} className="p-1 flex items-center gap-2 relative w-[40%] h-10 bg-black rounded-md">
        <input
          
          type="text"
          placeholder="Search..."
          className=" bg-transparent  p-2 rounded-md text-white w-[80%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button className='p-1 rounded-md flex justify-center items-center  w-[20%]'><img src={seacrh} alt="" /></button> */}
      </form>
      <div className=" flex gap-2">
        <img
          className="hidden lg:block w-7 object-contain "
          src={upload}
          alt=""
        />
        <img className="hidden lg:block w-7 object-contain" src={more} alt="" />
        <img
          className="hidden lg:block w-7 object-contain"
          src={notification}
          alt=""
        />
        <img
          className=" w-7 object-contain rounded-full"
          src={user_profile}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
