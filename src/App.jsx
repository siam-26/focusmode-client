import { RouterProvider } from "react-router-dom"
import router from "./Router/Route"

function App() {

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className=" w-10/12 mx-auto pt-5">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
