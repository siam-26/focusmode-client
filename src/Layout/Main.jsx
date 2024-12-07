
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Navbar from "../Shared/Navbar/Navbar"
import ReadingSidebar from "../Shared/Navbar/Sidebar/ReadingSidebar"
import { useSidebar } from "../context/responsiveSidebar";
import { motion } from "framer-motion";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const Main = () => {

    const { isCollapsed } = useSidebar();
const navigate = useNavigate()
    const outletVariants = {
      expanded: { marginLeft: "10px", transition: { duration: 0.3 } },
      collapsed: { marginLeft: "6px", transition: { duration: 0.3 } },
    };
    return (
        <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey={PUBLISHABLE_KEY}
      >
        <div className="relative">
            <Navbar />
            <div className={`hidden lg:flex mt-3 md:mt-5 `}>
                <div className={"  border-0 "}>
                    <ReadingSidebar />
                </div>
                <motion.div
                    className={`flex-1`}
                    variants={outletVariants}
                    animate={isCollapsed ? "collapsed" : "expanded"}
                >
                    <Outlet />
                </motion.div>
            </div>

            <div className={`flex lg:hidden mt-3 md:mt-5 `}>
                <div className={`${isCollapsed === false ? "fixed z-[100]":""}  border-0 `}>
                    <ReadingSidebar />
                </div>
                <div className={`${isCollapsed === false ? "fixed z-[50] w-full opacity-50":"w-full"}  border-0 `}
                   
                >
                    <Outlet />
                </div>
           
            </div>
        </div>
        </ClerkProvider>
    )
}

export default Main



