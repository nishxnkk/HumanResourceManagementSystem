import React from 'react'
 const data = [
    { month: "Jan", value: 80, color: "#FF6B6B" },
    { month: "Feb", value: 200, color: "#FF8E53" },
    { month: "Mar", value: 160, color: "#FFC560" },
    { month: "Apr", value: 250, color: "#FFD75D" },
    { month: "May", value: 150, color: "#A3E059" },
    { month: "Jun", value: 100, color: "#8DD84F" },
    { month: "Jul", value: 270, color: "#47D043" },
    { month: "Aug", value: 170, color: "#5CD3A8" },
    { month: "Sep", value: 150, color: "#52D5E0" },
    { month: "Oct", value: 180, color: "#6BB9F0" },
    { month: "Nov", value: 205, color: "#4EA3F7" },
    { month: "Dec", value: 210, color: "#3A91E8" }
  ];

function EmployeesStatistics(){
 
  return (
    <div className="bg-blue-50 border border-gray-200 mx-10  p-6 rounded-xl shadow-xl max-w-6/7 ml-50
     ">
      <h2 className=" text-lg font-semibold mb-6 text-blue-600">
        Employee statistics of company
      </h2>

      <div className="flex items-end justify-between h-64 px-5 mt-15 max-w-4/5 mx-auto ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            
            {/* Bar */}
            <p className='text-gray-600 text-sm'>{item.value}</p>
            <div
              className="w-10 rounded-md  hover:scale-101 shadow-2xl hover:shadow-gray-700 duration-700
               cursor-pointer "
              style={{
                height: `${item.value}px`,
                backgroundColor: item.color
              }}
            ></div>

            {/* Label */}
            <span className="text-xs text-gray-600">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default EmployeesStatistics