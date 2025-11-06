import { useState, useEffect } from 'react';
import type { Candidate, CandidatesResponse } from './types/candidate';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CandidateCard } from './components/CandidateCard';
import { Pagination } from './components/Pagination';

const CANDIDATES_PER_PAGE = 10;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetch(`http://localhost:8000/api/candidates?search=${searchValue}`);
      const data: CandidatesResponse = await response.json();
      setCandidates(data.candidates);
      setTotalCandidates(data.total);
      setCurrentPage(1);
    };

    fetchCandidates();
  }, [searchValue]);

  const totalPages = Math.ceil(totalCandidates / CANDIDATES_PER_PAGE);
  const paginatedCandidates = candidates.slice(
    (currentPage - 1) * CANDIDATES_PER_PAGE,
    currentPage * CANDIDATES_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#f7f8f7]">
      <Header />
      <h1 className="text-[34.59px] font-normal text-[#15372c] px-6 pt-4 pb-3 leading-[46.67px]">All Candidates</h1>

      <div className="flex">
        <Sidebar searchValue={searchValue} onSearchChange={setSearchValue} />

        <main className="flex-1 px-6">
          <div className="flex justify-between items-center mb-4">
            <p>Showing {totalCandidates} candidate applications</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium">Generate Report</button>
              <button className="px-4 py-2 bg-[#3B7FBF] text-white rounded-md text-sm font-medium">+ Add Candidate</button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium">Bulk Actions</button>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-500 grid grid-cols-3">
            <div>Name</div>
            <div>Job/Status</div>
            <div>Actions</div>
          </div>

          <div>
            {paginatedCandidates.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
