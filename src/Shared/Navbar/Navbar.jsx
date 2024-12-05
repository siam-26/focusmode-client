import { Button } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isPractice, setIsPractice] = useState(1);  // State to manage toggle

    const handleToggle = (checked) => {
      setIsPractice(checked);
    };
  
    return (
        <div className="bg-white flex justify-between rounded-lg p-3 md:p-4 items-center">
            <div className="flex items-center gap-2">
                <FiArrowLeft />
                <h3 className="text-lg md:text-xl font-semibold">Focus Mode</h3>
            </div>

            <div className="h-11 flex justify-center items-center rounded-md bg-gray-200 text-gray-700  shadow-none ">
         
                <Link to="/"  >
                <button
                        onClick={() => setIsPractice(1)}
                        className={`${
                            isPractice === 1
                            ? "bg-gray-100 text-gray-800 rounded-md shadow-xl h-[42px] transition-all duration-300 inline-block"
                            : ""
                        } px-3`}
                        >
                        Reading
                        </button>

                        <Link to="practices">
                        <button
                            onClick={() => setIsPractice(2)}
                            className={`${
                            isPractice === 2
                                ? "bg-gray-100 text-gray-800 rounded-md shadow-lg h-[42px] transition-all duration-300 inline-block"
                                : ""
                            } px-3`}
                        >
                            Practice
                        </button>
                        </Link>

                    
                </Link>

                
            </div>

            <div>
                <FaUserCircle className="text-2xl"/>
            </div>
        </div>
    )
}

export default Navbar