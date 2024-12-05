import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import ReadingSidebar from "../Shared/Navbar/Sidebar/ReadingSidebar"
import { useSidebar } from "../context/responsiveSidebar";
import { motion } from "framer-motion";

const Main = () => {

    const { isCollapsed } = useSidebar();

    const outletVariants = {
      expanded: { marginLeft: "10px", transition: { duration: 0.3 } },
      collapsed: { marginLeft: "6px", transition: { duration: 0.3 } },
    };
    return (
        <div>
            <Navbar />
            <div className="flex mt-5">
                <div className="  border-0 ">
                    <ReadingSidebar />
                </div>
                <motion.div
                    className="flex-1"
                    variants={outletVariants}
                    animate={isCollapsed ? "collapsed" : "expanded"}
                >
                    <Outlet />
                </motion.div>
                {/* <div className="w-10/12">
                    <Outlet />
                </div> */}
            </div>
        </div>
    )
}

export default Main