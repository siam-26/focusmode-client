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
  CiStopwatch, 
  CiCalendar, 
} from "react-icons/ci";
import { MdChecklist, MdReport } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useSidebar } from "../../../context/responsiveSidebar";
import { FaCalendarCheck } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const ReadingSidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const location = useLocation();

  const sidebarVariants = {
    expanded: { width: "200px", transition: { duration: 0.3 } },
    collapsed: { width: "50px", transition: { duration: 0.3 } },
  };

  const menuItems = [
    { path: "/", label: "Home", icon: <TiHome /> },
    { path: "/stopwatch", label: "Stopwatch", icon: <CiStopwatch /> },
    { path: "/timer", label: "Timer", icon: <CiCalendar /> },
    { path: "/todo-list", label: "Todo List", icon: <MdChecklist /> },
    { path: "/complete", label: "Complete", icon: <AiOutlineCheckCircle /> },
    { path: "/incomplete", label: "Incomplete", icon: <AiOutlineCloseCircle /> },
    { path: "/daily-report", label: "Daily Report", icon: <FaCalendarCheck /> },
    { path: "/weekly-report", label: "Weekly Report", icon: <MdReport /> },
    { path: "/monthly-report", label: "Monthly Report", icon: <TiDocumentText /> },
  ];

  return (
    <motion.div
      className="  flex flex-col items-start gap-4"
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
    >
      
        <div className={`bg-white rounded-xl shadow-lg p-3 flex flex-col items-start${isCollapsed ? " gap-5":" gap-4 "}`}>
              {/* Menu Items */}
              {menuItems
          // .filter(item => {
          //   if (location.pathname === "/practices") {
          //     // Hide items 2-6 on the '/practices' route
          //     return !["/stopwatch", "/timer", "/todo-list", "/complete", "/incomplete"].includes(item.path);
          //   }
          //   // Show all items for the '/' route
          //   return true;
          // })
          .map((item, index) => (
            <Link key={index} to={item.path}>
              <div
                className={`flex items-center gap-2 text-gray-500 font-semibold ${
                  location.pathname === item.path ? "text-blue-500" : ""
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && <p>{item.label}</p>}
              </div>
            </Link>
          ))}

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
