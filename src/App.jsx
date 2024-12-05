import { RouterProvider } from "react-router-dom"
import router from "./Router/Route"
import { SidebarProvider } from "./context/responsiveSidebar"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <SidebarProvider>
      <div className="bg-gray-200 min-h-screen">
        <div className=" w-10/12 mx-auto pt-5">
          <RouterProvider router={router} />
        </div>
      </div>
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </SidebarProvider>
  )
}

export default App
