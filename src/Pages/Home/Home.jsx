import DateTimeDisplay from './DateAndTimer/DateTimeDisplay/DateTimeDisplay';
import Timer from './DateAndTimer/Timer/Timer';
import { Button, Select } from 'antd';

const Home = () => {

  const handleSubjectChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChapterChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex gap-4">
      <div className="w-1/2">
        <div className="bg-white rounded-lg">
          <DateTimeDisplay />
        </div>

        <div className="mt-5">
          <Timer />
        </div>
      </div>
      <div className="flex justify-center conter-center bg-white w-1/2 rounded-lg">
        <div className=" w-4/5 bg-green-500">
          {/* for subject select */}
          <div>
            <p>Subject</p>
            <Select
              defaultValue="Math"
              style={{
                width: 200,
              }}
              onChange={handleSubjectChange}
              options={[
                {
                  label: <span>manager</span>,
                  title: 'manager',
                  options: [
                    {
                      label: <span>Jack</span>,
                      value: 'Jack',
                    },
                    {
                      label: <span>Lucy</span>,
                      value: 'Lucy',
                    },
                  ],
                },
                {
                  label: <span>engineer</span>,
                  title: 'engineer',
                  options: [
                    {
                      label: <span>Chloe</span>,
                      value: 'Chloe',
                    },
                    {
                      label: <span>Lucas</span>,
                      value: 'Lucas',
                    },
                  ],
                },
              ]}
            />
          </div>
          {/* for Chapter select */}
          <div>
            <p>Chapter</p>
            <Select
              defaultValue="Chapter 1"
              style={{
                width: 200,
              }}
              onChange={handleChapterChange}
              options={[
                {

                  options: [
                    {
                      label: <span>Jack</span>,
                      value: 'Jack',
                    },
                    {
                      label: <span>Lucy</span>,
                      value: 'Lucy',
                    },
                  ],
                },
                {

                  options: [
                    {
                      label: <span>Chloe</span>,
                      value: 'Chloe',
                    },
                    {
                      label: <span>Lucas</span>,
                      value: 'Lucas',
                    },
                  ],
                },
              ]}
            />
          </div>

          <Button className="p-6" type="primary" block>
            Start
          </Button>
        </div>
      </div>
    </div>

  )
}

export default Home