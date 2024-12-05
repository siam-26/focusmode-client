import React from 'react';
import DateTimeDisplay from '../DateAndTimer/DateTimeDisplay/DateTimeDisplay';

const Practices = () => {
    return (
        <div className="flex gap-4">
      <div className="bg-white w-1/2 rounded-lg">
          <DateTimeDisplay />
      </div>
      <div className="bg-blue-500 w-1/2">right part</div>
    </div>
    );
}

export default Practices;
