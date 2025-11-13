// src/components/Emp_Composition/emp_comp.jsx
import React, { useMemo, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { FaMars, FaVenus } from "react-icons/fa";
import "./emp_comp.css"; // ✅ path fixed for same folder

Chart.register(ArcElement, Tooltip);

export default function EmpComp({ male = 65, female = 35 }) {
  const chartRef = useRef(null);

  const data = useMemo(
    () => ({
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [male, female],
          backgroundColor: ["#27d9b1", "#3b2bea"],
          borderColor: "#e8f5fb",
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    }),
    [male, female]
  );

  const options = useMemo(
    () => ({
      cutout: "70%",
      rotation: -Math.PI * 0.25,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      maintainAspectRatio: false,
    }),
    []
  );

  return (
    <div className="emp-card">
      <div className="emp-title">Employees Composition</div>

      <div className="emp-donut-wrap">
        <div className="emp-donut-canvas">
          <Doughnut ref={chartRef} data={data} options={options} />
        </div>

        <div className="emp-badge emp-badge-female" title="Female">
          <FaVenus className="emp-badge-icon" />
          <span className="emp-badge-text">{female}%</span>
        </div>

        <div className="emp-badge emp-badge-male" title="Male">
          <FaMars className="emp-badge-icon" />
          <span className="emp-badge-text">{male}%</span>
        </div>
      </div>
    </div>
  );
}
