// import { Link, useLocation } from "react-router-dom";
// import { TiHome } from "react-icons/ti";
// import { CiStopwatch } from "react-icons/ci";

// const ReadingSidebar = () => {
//   const location = useLocation()
//   return (
//     <div>
    


//       {
//           location.pathname === "/" ?
//           <div className="flex flex-col gap-4 px-3 py-5 rounded-lg">
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Home</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <CiStopwatch />
//               <p>Stopwatch</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Timer</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Todo List</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Complete</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Incomplete</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Daily Report</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Weekly Report</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-3 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Monthly Report</p>
//             </div>
//           </Link>
//         </div>

//           :


//           <div className="flex flex-col  gap-4 px-3 py-5 rounded-lg">
       
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Home</p>
//             </div>
//           </Link>
       
        
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Daily Report</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-2 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Weekly Report</p>
//             </div>
//           </Link>
//           <Link to="">
//             <div className="flex items-center gap-3 text-gray-500 font-semibold">
//               <TiHome />
//               <p>Monthly Report</p>
//             </div>
//           </Link>
//         </div>


//         }
//     </div>
//   )
// }

// export default ReadingSidebar




import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { 
  TiHome, 
  TiDocumentText 
} from "react-icons/ti";
import { 
  CiCalendar, 
} from "react-icons/ci";
import { MdChecklist, MdIncompleteCircle, MdReport } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useSidebar } from "../../../context/responsiveSidebar";
import { FaCalendarCheck, FaHourglassHalf, FaListAlt, FaNotesMedical } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoTime } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";


const ReadingSidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const location = useLocation();

  const sidebarVariants = {
    expanded: { width: "200px", transition: { duration: 0.3 } },
    collapsed: { width: "50px", transition: { duration: 0.3 } },
  };

  const menuItems = [
    { path: "/", label: "Home", icon: <TiHome /> },
    { path: "/stopwatch", label: "Stopwatch", icon: <IoTime /> },
    { path: "/timer", label: "Timer", icon: <FaHourglassHalf /> },
    { path: "/todo-list", label: "Todo List", icon: <FaNotesMedical /> },
    { path: "/complete", label: "Complete", icon: <FaCalendarCheck /> },
    { path: "/incomplete", label: "Incomplete", icon: <MdIncompleteCircle /> },
    { path: "/daily-report", label: "Daily Report", icon: <FaListAlt /> },
    { path: "/weekly-report", label: "Weekly Report", icon: < SlCalender/> },
    { path: "/monthly-report", label: "Monthly Report", icon: <RiCalendarScheduleFill /> },
  ];

  return (
    <motion.div
      className="  flex flex-col items-start gap-4"
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
    >
      
        <div className="bg-white h-[400px] overflow-hidden rounded-xl shadow-lg">
        <div className={` p-3 flex flex-col items-start${isCollapsed ? " gap-6":" gap-5 "}`}>
              {/* Menu Items */}
              {menuItems
          .filter(item => {
            if (location.pathname === "/practices") {
              // Hide items 2-6 on the '/practices' route
              return !["/stopwatch", "/timer", "/todo-list", "/complete", "/incomplete"].includes(item.path);
            }
            // Show all items for the '/' route
            return true;
          })
          .map((item, index) => (
            <Link key={index} to={item.path}>
              <div
                className={`flex items-center gap-2 text-[#7e8088] font-semibold ${
                  location.pathname === item.path ? "text-green-500" : ""
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && <p>{item.label}</p>}
              </div>
            </Link>
          ))}

        </div>
        </div>
      {/* Toggle Button */}
      <div className="flex justify-end w-[85%]">
      <button
        onClick={toggleSidebar}
        className="text-gray-500 text-xl hover:text-gray-800 mb-4 bg-white rounded-xl shadow-lg p-3"
      >
        {isCollapsed ? <BiMenuAltLeft /> : <HiOutlineMenuAlt2 />}
      </button>
      </div>
    
    </motion.div>
  );
};

export default ReadingSidebar;
