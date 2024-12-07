import { Button } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [isPractice, setIsPractice] = useState(1);  // State to manage toggle

    const handleToggle = (checked) => {
      setIsPractice(checked);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="bg-white flex justify-between rounded-lg p-3 md:p-4 items-center">
            <div className="flex items-center gap-2">
                <FiArrowLeft />
                <h3 className="text-lg md:text-xl font-semibold">Focus Mode</h3>
            </div>

            <div className=" flex justify-center items-center rounded-md bg-gray-100 text-gray-700  shadow-none ">
         
                <Link to="/" onClick={() => setIsPractice(1)}
                        className={`${
                            isPractice === 1
                            ? "bg-white text-gray-800 py-2 ml-1 rounded-md shadow-lg transition-all duration-300 inline-block"
                            : "py-3 text-gray-700"
                        } px-3 ml-1`}
                        >
                        <button>Reading</button>
                    </Link>

                        <Link to="/practices" onClick={() => setIsPractice(2)} 
                            className={`${
                            isPractice === 2
                                ? "bg-white text-gray-800 py-2 mr-1 rounded-md shadow-lg transition-all duration-300 inline-block"
                                : "py-3 text-gray-700"
                            } px-3 mr-1`}
                        >
                            <button>Practice</button>
                        </Link>

                    

                
            </div>
            <div onClick={toggleDropdown} className="cursor-pointer flex items-center">
        <FaUserCircle className="text-2xl" />
      </div>
           {isOpen && (
        <div className="absolute right-0 mt-32 w-48 bg-white border rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</li>
           
            <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </SignedOut>
          </div>
          </ul>
        </div>
      )}
        </div>
    )
}

export default Navbar