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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Meetings</h2>
              <p className="text-sm text-gray-500 mt-1">Upcoming schedule — stay prepared</p>
            </div>
            <button
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-white/50 shadow-sm hover:scale-105 transition-transform"
              aria-label="Open calendar"
            >
              <Calendar size={16} />
              <span className="text-sm font-medium text-gray-700">Calendar</span>
            </button>
          </div>

          <div className="space-y-4">
            {meetings.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx }}
                className="flex items-center gap-4 bg-white/70 rounded-lg p-3 border border-white/30 shadow-sm hover:shadow-md hover:scale-[1.01] transition-transform"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center text-center text-white shadow-inner bg-gradient-to-br ${m.color}`}
                    aria-hidden="true"
                  >
                    <span className="text-xs font-medium opacity-90">{m.dayShort}</span>
                    <span className="text-lg font-semibold mt-0.5">{m.date}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-gray-800 font-semibold">{m.title}</h3>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={14} />
                      <span>{/* small empty spacer for alignment */}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{m.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-xs text-gray-500">Last synced 10 minutes ago</div>
            <button className="text-sm font-medium px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow hover:brightness-95 transition">
              Sync now
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          Tip: Hover a meeting to see subtle elevation and action hints.
        </div>
      </motion.div>
    </div>
  );
}
