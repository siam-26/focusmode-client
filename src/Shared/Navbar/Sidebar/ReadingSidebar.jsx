import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { CiStopwatch } from "react-icons/ci";

const ReadingSidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 px-3 py-5 rounded-lg">
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Home</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <CiStopwatch />
            <p>Stopwatch</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Timer</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Todo List</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Complete</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Incomplete</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Daily Report</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <TiHome />
            <p>Weekly Report</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center gap-3 text-gray-500 font-semibold">
            <TiHome />
            <p>Monthly Report</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ReadingSidebar