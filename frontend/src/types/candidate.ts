export interface Candidate {
  id: number;
  name: string;
  position: string;
  company: string;
  job_title: string;
  status: string;
  status_type?: string;
  action_link?: string;
  has_availability?: boolean;
  availability_status?: string;
  has_interviews?: boolean;
  interviews?: {
    name: string;
    scheduled?: boolean;
  }[];
  application_type?: string;
  source?: string;
}

export interface CandidatesResponse {
  candidates: Candidate[];
  total: number;
}
