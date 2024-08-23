import React from 'react';

function DoneList({ doneTaskArray, handleTaskStatusChange }) {
  return (
    <>
      <h4 className="text-lg font-semibold mt-4">Things done</h4>
      <ul className="mt-4">
        {doneTaskArray.length === 0 ? (
          <div className="text-gray-400">No Todo's Here!</div>
        ) : (
          doneTaskArray.map(item => (
            <li className="flex gap-3 items-center mt-1 font-medium text-gray-700 text-sm" key={item}>
              <input
                className="w-4 h-4"
                type="checkbox"
                checked
                onChange={() => handleTaskStatusChange(item, true)}
                value={item}
              />
              {item}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default DoneList;
