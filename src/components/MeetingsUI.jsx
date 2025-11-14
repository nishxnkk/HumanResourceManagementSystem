import React from "react";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const meetings = [
  {
    id: 1,
    dayShort: "Mon",
    date: 10,
    title: "Interview",
    time: "From 9:30 AM to 11:20 AM",
    color: "from-blue-300 to-blue-500",
  },
  {
    id: 2,
    dayShort: "Tue",
    date: 11,
    title: "Organizational Meeting",
    time: "From 9:30 AM to 11:20 AM",
    color: "from-purple-300 to-purple-500",
  },
  {
    id: 3,
    dayShort: "Wed",
    date: 12,
    title: "Meeting with the HR",
    time: "From 9:30 AM to 11:20 AM",
    color: "from-green-300 to-green-500",
  },
];

export default function MeetingsUI() {
  return (
    <div className="w-full flex items-start justify-center p-2 bg-[#F5F9FF]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl"
      >
        <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Meetings</h2>

            <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100">
              <Calendar size={14} /> Calendar
            </button>
          </div>

          {/* Meeting List */}
          <div className="space-y-3">
            {meetings.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-md border border-gray-200 p-2.5 hover:shadow transition"
              >
                {/* Date box */}
                <div
                  className={`w-12 h-12 rounded-md flex flex-col items-center justify-center text-white bg-gradient-to-br ${m.color}`}
                >
                  <span className="text-[11px] opacity-90">{m.dayShort}</span>
                  <span className="text-base font-semibold -mt-1">{m.date}</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-semibold text-gray-800">{m.title}</h3>
                    <Clock size={12} className="text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{m.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
