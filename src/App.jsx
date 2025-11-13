// src/App.jsx
import React from 'react'
import Sidebar from './components/Sidebar'
import EmpComp from './components/Emp_Composition/emp_comp'
import './App.css'

export default function App() {
  return (
    //Slidebar
    <div className="app-root" style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 250 }}>
        <Sidebar />
      </aside>


      {/* Employees Composition */}
      <main style={{ flex: 1, paddingTop: 400 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <EmpComp male={65} female={35} />
          </div>
        </div>
      </main>
    </div>
  )
}
