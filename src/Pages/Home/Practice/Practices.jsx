import toast from 'react-hot-toast';
import { Button, Select } from 'antd';
import { useState } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';
import { div } from 'framer-motion/client';
import DateTimeDisplay from '../DateAndTimer/DateTimeDisplay/DateTimeDisplay';
import Timer from '../DateAndTimer/Timer/Timer';
import { IoArrowBack } from 'react-icons/io5';


const Practices = () => {
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

  const [start, setStart] = useState(1)

  const startExam = () =>{
    setStart(2)
  }

  return (
    <div className="flex flex-col md:flex-row mb-5 md:mb-0">
      <div className="">

        
      </div>

      <div className="flex justify-center items-center py-5 md:py-10 bg-white w-full rounded-lg">
        <div className="w-4/5 rounded-lg">
          <div className='flex w-full gap-5'>
            {/* Subject Dropdown */}
            <div className='w-full'>
                <p className="text-[#4B5563] font-semibold mb-3">Subject</p>
                <Select
                value={subject}
                // style={{ width: '' }}
                className='w-full'
                onChange={handleSubjectChange}
                options={[
                    { label: 'Math', value: 'Math' },
                    { label: 'Science', value: 'Science' },
                    { label: 'History', value: 'History' },
                ]}
                />
            </div>

            {/* Chapter Dropdown */}
            <div className="w-full ">
                <p className="text-[#4B5563] font-semibold mb-3">Chapter</p>
                <Select
                value={chapter}
                // style={{ width: '' }}
                className='w-full'
                onChange={handleChapterChange}
                options={[
                    { label: 'Chapter 1', value: 'Chapter 1' },
                    { label: 'Chapter 2', value: 'Chapter 2' },
                    { label: 'Chapter 3', value: 'Chapter 3' },
                ]}
                />
            </div>
          </div>

          {
            start === 1? 
            <div onClick={startExam} className='bg-blue-500 hover:bg-blue-400 py-1 cursor-pointer text-white font-semibold mt-10 text-center rounded-lg'>
            <button onClick={startTimer}>Start Exam</button>
          </div>
          :
          <div>
            <div className="mt-3 md:mt-5 w-full h-[90px] overflow-hidden">
                    <Timer className="!w-full" time={time} timerRunning={timerRunning} />
                </div>

            <div className='border-2 mt-5 rounded-lg'>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCrngcvPxKkZ22zTRIqdPUioDerwW8gJGw7DDKeoAdkFVUXEY6Om5DsXrzB1aDAlq0GGGD8ySrIW_hkiklt0wN6OzHFJ4kA9rpY8xUEv-zmir88t8PIKLQ71VuXrw_-to2-sI8-IK70HNFPMGcNk7qNLVc8N1cL2X_ygzVe-10Arg8Cv6GiiHa0cAoWg/s560/Untitled1_001.jpg" alt="" />
            </div>

            <div className='mt-10 flex items-center justify-between'>
                <div className='text-white font-semibold bg-blue-500 py-2 text-center w-[45%] md:w-[20%] rounded-lg flex items-center gap-1 justify-center'><IoArrowBack className='relative top-[1px]'/>Prev</div>
                <div className='text-white font-semibold bg-blue-500 py-2 text-center w-[45%] md:w-[20%] rounded-lg flex items-center gap-1 justify-center'>Next <IoArrowBack className='relative top-[1px] rotate-180'/></div>
            </div>

          </div>
          }

          {/* Start, Pause, Stop, Reset Buttons */}
          <div className="mt-4 flex items-center gap-1 hidden">
            {!timerRunning ? (
              // <Button type="primary" block onClick={startTimer}>
              //   Start
              // </Button>
              <div className='cursor-pointer bg-blue-500 text-white p-[7px] rounded-md'>
                <FaPlay className='' onClick={startTimer}/>
                </div>
            ) : (
              // <Button type="danger" block onClick={pauseTimer}>
              //   Pause
              // </Button>
              <div className='cursor-pointer bg-blue-500 text-white p-[7px] rounded-md'>
                <FaPause className='' onClick={pauseTimer}/>
                </div>
            )}
            {/* <Button className="mt-2" type="primary" block onClick={stopTimer}>
              Stop
            </Button> */}
<div className='cursor-pointer bg-blue-500 text-white p-[7px] rounded-md'>
                
            <FaStop className='' onClick={stopTimer}/>
                </div>
            <Button className="w-9/12 bg-blue-500 hover:bg-blue-400 text-white rounded-md" type="default" block onClick={resetTimer}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practices;
