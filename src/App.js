import React from "react";
import StatsCards from "./components/StatsCards/StatsCards";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        HRMS Dashboard
      </h1>
      <StatsCards />
    </div>
  );
}

export default App;
