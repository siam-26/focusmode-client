import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import ReadingSidebar from "../Shared/Navbar/Sidebar/ReadingSidebar"

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="flex gap-8 bg-red-500 mt-5">
                <div className="bg-white w-2/12 border-0 rounded-lg">
                    <ReadingSidebar />
                </div>
                <div className="w-10/12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Main