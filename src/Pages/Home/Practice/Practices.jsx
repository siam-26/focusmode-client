import React from 'react';
import DateTimeDisplay from '../DateAndTimer/DateTimeDisplay/DateTimeDisplay';
import { Button, Select } from 'antd';
import { Link } from 'react-router-dom';

const Practices = () => {

    const handleSubjectChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleChapterChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleTopicChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className="flex gap-4">
            <div className="h-[130px] bg-white w-1/2 rounded-lg">
                <DateTimeDisplay />
            </div>
            <div className="w-1/2">
                <div className="flex justify-center content-center bg-white rounded-lg py-10">
                    <div className="flex flex-col gap-y-3 w-4/5">
                        {/* for subject select */}
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Subject</p>
                            <Select
                                className='w-full'
                                defaultValue="Math"
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
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Chapter</p>
                            <Select
                                className='w-full'
                                defaultValue="Chapter 1"
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

                        {/* for Topic select */}
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Topic</p>
                            <Select
                                className='w-full'
                                defaultValue="Math"
                                onChange={handleTopicChange}
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

                        <div className='py-8'>
                            <Link to='/questions'>
                                <Button className="font-semibold p-6" type="primary" block>
                                    Start Exam
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Practices;
