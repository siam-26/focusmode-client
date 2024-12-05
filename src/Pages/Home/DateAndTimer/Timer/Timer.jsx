import { IoAdd } from "react-icons/io5";

const Timer = () => {
    return (
        <div className="bg-white p-7 rounded-lg">
            <div className="text-center py-6 bg-gray-100 rounded-sm">
                <p className="font-bold text-4xl text-gray-600">00:00:00</p>
            </div>

            <div className="text-center mt-5 bg-gray-100 rounded-sm">
                <div className="py-8">
                    <IoAdd className="font-bold text-gray-500 text-2xl mx-auto" />
                    <p className="font-semibold text-gray-500 pt-2">Select a Counter</p>
                </div>
            </div>
        </div>
    )
}

export default Timer;