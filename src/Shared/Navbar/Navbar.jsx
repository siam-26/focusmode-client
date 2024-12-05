import { Button } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white flex justify-between rounded-lg p-3 md:p-4 items-center">
            <div className="flex items-center gap-2">
                <FiArrowLeft />
                <h3 className="text-lg md:text-xl font-semibold">Focus Mode</h3>
            </div>

            <div>
         
                <Link to="/">
                <Button color="default" variant="filled">
                Reading
                </Button>
                    
                </Link>
                <Link to="practices">
                <Button color="default" variant="filled">
                        Practice
                </Button>
                    
                </Link>
            </div>

            <div>
                <FaUserCircle className="text-2xl"/>
            </div>
        </div>
    )
}

export default Navbar