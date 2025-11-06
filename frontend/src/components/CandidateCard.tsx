import { useState } from 'react';
import type { Candidate } from '../types/candidate';
import { CollectFeedback } from './CollectFeedback';

interface CandidateCardProps {
  candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div className="px-6 py-4 grid grid-cols-3 items-center">
        <div>
          <p className="font-semibold text-lg">{candidate.name}</p>
          <p className="text-gray-500">{candidate.company}</p>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={() => setIsOpen(!isOpen)} className="text-left">
            <p>{candidate.job_title}</p>
            <div className="flex items-center gap-2 text-gray-500">
              {candidate.status === 'Rejected' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              )}
              <span>{candidate.status}</span>
            </div>
          </button>
          {candidate.status !== 'Rejected' && (
            <button onClick={() => setShowFeedbackModal(true)} className="text-green-500 font-semibold">Collect Feedback</button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="px-6 pb-4">
          {candidate.status !== 'Rejected' ? (
            <>
              <div className="grid grid-cols-3">
                <div>
                  <p className="font-semibold">Availability</p>
                  <p className={candidate.has_availability ? 'text-green-500' : 'text-red-500'}>
                    {candidate.has_availability ? 'Available' : 'Not Available'}
                  </p>
                </div>
                <div className="col-span-2">
                  <a href="#" className="text-green-500 font-semibold">Request Availability</a>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-4">
                <div>
                  <p className="font-semibold">Interviews</p>
                </div>
                <div className="col-span-2">
                  <a href="#" className="text-green-500 font-semibold">Schedule all manually</a>
                  <span className="text-gray-400 mx-2">|</span>
                  <a href="#" className="text-green-500 font-semibold">Automated scheduling</a>
                </div>
              </div>
              {candidate.interviews?.map((interview, index) => (
                <div key={index} className="grid grid-cols-3 mt-2 items-center">
                  <div>
                    <p>{interview.name}</p>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <a href="#" className="text-green-500">Schedule manually</a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a href="#" className="text-green-500">Automated scheduling</a>
                    <button className="ml-4 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-gray-500">This candidate has been rejected.</p>
          )}
        </div>
      )}
      {showFeedbackModal && <CollectFeedback onClose={() => setShowFeedbackModal(false)} />}
    </div>
  );
}