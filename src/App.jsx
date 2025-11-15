import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import EmployeesStatistics from "./Dashboard/EmployeesStatistics";
import StatsCards from "./components/StatsCard";
import EmpComposition from "./components/Emp_Composition/emp_comp";
import MeetingsUI from "./components/MeetingsUI.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-48' : 'ml-0'} sm:ml-48 p-4 sm:p-8`}>
        <h1 className="text-xl font-bold text-blue-600 mb-6">Dashboard</h1>
        <StatsCards />
        <div className="mt-2">
          <EmployeesStatistics />
        </div>
        <div className="mt-8 flex flex-col lg:flex-row items-start gap-6">
          <div className="flex-1 w-full lg:max-w-lg">
            <MeetingsUI />
          </div>
          <div className="w-full lg:w-48 flex justify-center lg:justify-start">
            <EmpComposition />
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
