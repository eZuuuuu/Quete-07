import React from 'react';
  
function DisplayEmployee({ employee }) {
  return (
    <div className="DisplayEmployee">
      <img
        src={employee.picture}
        alt={employee.name}
      />
      <ul>
        <li>
          {employee.name}
        </li>
        <li>{employee.fact}</li>
      </ul>
    </div>
  );
};
  
export default DisplayEmployee;