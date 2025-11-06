export function Header() {
  return (
    <header className="bg-white px-6 py-3 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center gap-4">
        <a href="#" className="text-lg font-semibold text-gray-800">greenhouse Recruiting</a>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Jobs</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold border-b-2 border-green-500">Candidates</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">CRM</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Reports</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Integrations</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">⌘+K</div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <text x="12" y="16" textAnchor="middle" className="fill-black text-sm font-light">?</text>
          </svg>
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">AC</div>
      </div>
    </header>
  );
}