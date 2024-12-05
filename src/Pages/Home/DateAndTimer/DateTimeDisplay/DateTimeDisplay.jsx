import { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Calculate Bangladesh Time (BST, UTC+6)
  const bangladeshTime = new Date(
    currentTime.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );

  // Format time and date for display
  const timeString = bangladeshTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const dateString = bangladeshTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-center py-6">
      <p className="font-medium text-4xl text-gray-600">{timeString}</p>
      <p className="font-semibold text-gray-400 pt-2">{dateString}</p>
    </div>
  );
};

export default DateTimeDisplay;
