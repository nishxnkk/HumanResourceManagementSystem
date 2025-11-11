import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const statsData = [
  { title: "Total Employees", value: 856, change: "+10.0%", positive: true, label: "employees" },
  { title: "Job Views", value: 3342, change: "+22.0%", positive: true, label: "views" },
  { title: "Job Applied", value: 77, change: "+12.0%", positive: true, label: "applications" },
  { title: "Resigned Employees", value: 17, change: "-7.0%", positive: false, label: "resigned" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <span
              className={`flex items-center text-sm font-semibold ${
                stat.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.positive ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}
              {stat.change}
            </span>
          </div>
          <p className="text-3xl font-semibold text-gray-800">
            {stat.value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 font-medium mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
