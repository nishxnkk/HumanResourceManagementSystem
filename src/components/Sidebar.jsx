const Sidebar = () => {
  return (
    <div>
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          className="h-full flex flex-col justify-center px-3 py-4 overflow-y-auto"
          style={{ backgroundColor: '#266ECD' }}
        >
          <ul className="space-y-6 font-medium">
            {[
              'Dashboard',
              'Employees',
              'Recognition',
              'Feed',
              'Chat',
              'Events',
              'Profile',
              'Settings',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-lg text-white hover:text-black group"
                  style={{ transition: '0.2s' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#D9D9D9')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = 'transparent')
                  }
                >
                  <span className="ms-3 text-sm">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
