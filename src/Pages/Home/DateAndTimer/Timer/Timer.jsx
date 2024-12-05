const Timer = ({ time, timerRunning }) => {
    const formatTime = (time) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
  
    return (
      <div className="bg-white p-7 rounded-lg">
        <div className="text-center py-6 bg-gray-100 rounded-sm">
          <p className="font-bold text-4xl text-gray-600">{formatTime(time)}</p>
        </div>
  
        <div className="text-center mt-5 bg-gray-100 rounded-sm">
          <div className="py-8">
            {timerRunning ? (
              <p className="font-semibold text-gray-500 pt-2">Timer Running</p>
            ) : (
              <p className="font-semibold text-gray-500 pt-2">Timer Paused</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Timer;
  