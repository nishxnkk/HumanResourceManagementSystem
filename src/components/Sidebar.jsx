const menuItems = [
  { key: 'Dashboard', label: 'Dashboard', icon: 'dashboard' },
  { key: 'Employees', label: 'Employees', icon: 'users' },
  { key: 'Recognition', label: 'Recognition', icon: 'star' },
  { key: 'Feed', label: 'Feed', icon: 'feed' },
  { key: 'Chat', label: 'Chat', icon: 'chat' },
  { key: 'Events', label: 'Events', icon: 'calendar' },
  { key: 'Profile', label: 'Profile', icon: 'user' },
  { key: 'Settings', label: 'Settings', icon: 'settings' },
]

const Icon = ({ name }) => {
  const base = 'w-5 h-5 flex-shrink-0'
  switch (name) {
    case 'dashboard':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-6H3v6z" fill="currentColor" />
        </svg>
      )
    case 'users':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zM2 20c0-2.5 4-4 6-4s6 1.5 6 4v1H2v-1zM12 20c0-2.5 4-4 6-4s6 1.5 6 4v1H12v-1z" fill="currentColor" />
        </svg>
      )
    case 'star':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.554L19.335 24 12 19.897 4.665 24l1.636-8.696L.6 9.75l7.732-1.732L12 .587z" />
        </svg>
      )
    case 'feed':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h18M3 12h18M7 17h10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'chat':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" />
        </svg>
      )
    case 'calendar':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" />
        </svg>
      )
    case 'user':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z" />
        </svg>
      )
    case 'settings':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}

const Sidebar = ({ isOpen, toggleSidebar, currentPage, setCurrentPage }) => {
  const handleMenuClick = (pageKey) => {
    setCurrentPage(pageKey);
    toggleSidebar(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Hamburger Menu for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 sm:hidden bg-blue-600 text-white p-2 rounded-md"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-48 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className="h-full flex flex-col px-4 py-6 overflow-hidden text-white"
          style={{ backgroundColor: '#266ECD' }}
        >
          {/* Logo / App Title */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="items-baseline gap-2">
                <div className="text-lg font-bold">HRMS</div>
                <div className="text-[8px] opacity-70 whitespace-nowrap">Human Resource Management System</div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-6 flex items-center gap-3 px-2">
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
              {/* placeholder initials avatar */}
              <span className="text-blue-600 font-semibold">U</span>
            </div>
            <div>
              <div className="font-semibold">Userxyz</div>
              <div className="text-xs opacity-90">HR Manager</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-2 flex-1">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handleMenuClick(item.key)}
                    className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                      currentPage === item.key 
                        ? 'bg-white bg-opacity-20 text-black' 
                        : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-black'
                    }`}
                  >
                    <Icon name={item.icon} />
                    <span className="text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
