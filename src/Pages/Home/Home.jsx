import toast from 'react-hot-toast';
import DateTimeDisplay from './DateAndTimer/DateTimeDisplay/DateTimeDisplay';
import Timer from './DateAndTimer/Timer/Timer';
import { Button, Select } from 'antd';
import { useState } from 'react';


const Home = () => {
  const [subject, setSubject] = useState('Math');
  const [chapter, setChapter] = useState('Chapter 1');
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(0); // to store the timer time
  const [intervalId, setIntervalId] = useState(null); // to store the timer interval

  const handleSubjectChange = (value) => {
    setSubject(value);
    console.log(`Selected Subject: ${value}`);
  };

  const handleChapterChange = (value) => {
    setChapter(value);
    console.log(`Selected Chapter: ${value}`);
  };

  const startTimer = () => {
    setTimerRunning(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(intervalId);
      // Dismiss all previous toasts
   toast.dismiss()
    // Save the timer data to localStorage
    const timerData = [{
      subject,
      chapter,
      timeSpent: time,
      date: new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' }), // Bangladesh time
    }]

    localStorage.setItem('timerData', JSON.stringify(timerData));

    // Show Toast notification
    toast.success('Timer data saved to local storage!');

    // Reset the timer
    resetTimer();
    
  };

  const pauseTimer = () => {
    setTimerRunning(false);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setTime(0);
    stopTimer();
  };

  return (
    <div className="flex gap-4">
      <div className="w-1/2">
        <div className="bg-white rounded-lg">
          <DateTimeDisplay />
        </div>

        <div className="mt-5">
          <Timer time={time} timerRunning={timerRunning} />
        </div>
      </div>

      <div className="flex justify-center items-center bg-white w-1/2 rounded-lg">
        <div className="w-4/5 bg-green-500 p-6 rounded-lg">
          {/* Subject Dropdown */}
          <div>
            <p className="text-white">Subject</p>
            <Select
              value={subject}
              style={{ width: 200 }}
              onChange={handleSubjectChange}
              options={[
                { label: 'Math', value: 'Math' },
                { label: 'Science', value: 'Science' },
                { label: 'History', value: 'History' },
              ]}
            />
          </div>

          {/* Chapter Dropdown */}
          <div className="mt-4">
            <p className="text-white">Chapter</p>
            <Select
              value={chapter}
              style={{ width: 200 }}
              onChange={handleChapterChange}
              options={[
                { label: 'Chapter 1', value: 'Chapter 1' },
                { label: 'Chapter 2', value: 'Chapter 2' },
                { label: 'Chapter 3', value: 'Chapter 3' },
              ]}
            />
          </div>

          {/* Start, Pause, Stop, Reset Buttons */}
          <div className="mt-4">
            {!timerRunning ? (
              <Button type="primary" block onClick={startTimer}>
                Start
              </Button>
            ) : (
              <Button type="danger" block onClick={pauseTimer}>
                Pause
              </Button>
            )}
            <Button className="mt-2" type="primary" block onClick={stopTimer}>
              Stop
            </Button>
            <Button className="mt-2" type="default" block onClick={resetTimer}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
