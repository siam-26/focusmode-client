import { Button } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-white flex justify-between rounded-lg p-4 items-center">
            <div className="flex items-center gap-2">
                <FiArrowLeft />
                <h3 className="text-xl font-semibold">Focus Mode</h3>
            </div>

            <div>
                <Button color="default" variant="outlined">
                    Reading
                </Button>
                <Button color="default" variant="filled">
                    Practice
                </Button>
            </div>

            <div>
                <FaUserCircle className="text-2xl"/>
            </div>
        </div>
    )
}

export default Navbar