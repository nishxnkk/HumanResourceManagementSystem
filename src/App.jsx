import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import EmployeesStatistics from "./Dashboard/EmployeesStatistics";
import StatsCards from "./components/StatsCard";
import EmpComposition from "./components/Emp_Composition/emp_comp";
import MeetingsUI from "./components/MeetingsUI.jsx";  

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <div className="ml-48 p-8">
        <h1 className="text-xl font-bold text-blue-800 mb-6">Dashboard</h1>
        <StatsCards />
        <div className="mt-2">
          <EmployeesStatistics />
        </div>
        <div className="mt-8 flex items-start gap-6">
          <div className="flex-1 max-w-lg">
            <MeetingsUI />
          </div>
          <div className="w-48">
            <EmpComposition />
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
