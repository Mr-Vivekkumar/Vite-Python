from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import json
from pathlib import Path

app = FastAPI(title="Candidate Management API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load mock data
DATA_FILE = Path(__file__).parent.parent / "mock-data" / "candidates.json"

def load_candidates():
    """Load candidates from JSON file"""
    with open(DATA_FILE, "r") as f:
        data = json.load(f)
    return data["candidates"]


@app.get("/")
def read_root():
    """Root endpoint"""
    return {"message": "Candidate Management API", "docs": "/docs"}


@app.get("/api/candidates")
def get_candidates(
    search: Optional[str] = Query(None, description="Search by name, position, or company"),
):
    """
    Get filtered candidates

    Implement:
    1. Filter by search term (if provided)
    2. Return all matching candidates
    """

    # Step 1: Load all candidates
    candidates = load_candidates()

    # Step 2: Filter by search term (if provided)
    if search:
        search = search.lower()
        filtered_candidates = [c for c in candidates if
                               search in c['name'].lower() or
                               search in c['job_title'].lower() or
                               search in c['company'].lower()]
    else:
        filtered_candidates = candidates

    # Step 3: Return the filtered candidates
    return {"candidates": filtered_candidates, "total": len(filtered_candidates)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
