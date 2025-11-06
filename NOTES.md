## Frontend

### How to Run

1.  Navigate to the `frontend` directory.
2.  Run `npm install` to install dependencies.
3.  Run `npm run dev` to start the development server.
4.  Open your browser to `http://localhost:5173`.

### Key Decisions

*   **State Management:** Used `useState` for managing component-level state, such as the search input, current page, and the open/closed state of collapsible sections. This is sufficient for the current scope of the application.
*   **Component Structure:** Broke down the UI into smaller, reusable components like `CandidateCard`, `CollapsibleSection`, `Pagination`, and `Sidebar` to improve modularity and maintainability.
*   **Styling:** Utilized Tailwind CSS for rapid UI development, consistent styling, and a responsive design.
*   **Data Fetching:** Used the `fetch` API to retrieve candidate data from the backend. The data is fetched whenever the search input changes.
*   **Pagination:** Implemented client-side pagination to improve performance by only rendering a subset of the candidate data at a time.

### Assumptions

*   The backend API is running on `http://localhost:8000`.
*   The candidate data is relatively small, so client-side pagination is acceptable. For larger datasets, server-side pagination would be more appropriate.
*   The filter sections in the sidebar are visual only and do not have any functionality, as per the instructions.

## Backend

### How to Run

1.  Navigate to the `backend` directory.
2.  Run `pip install -r requirements.txt` to install dependencies.
3.  Run `uvicorn main:app --host 0.0.0.0 --port 8000` to start the server.

### Key Decisions

*   **Framework:** Used FastAPI to create a simple and fast API for serving candidate data.
*   **Search:** Implemented a basic search functionality that filters candidates by name, position, and company in a case-insensitive manner.
*   **Data:** The candidate data is loaded from a `candidates.json` file. For a production application, a database would be a more suitable choice.

### Assumptions

*   The `candidates.json` file is located in the `mock-data` directory at the root of the project.
*   The search functionality is sufficient for the current requirements and does not need to be more advanced (e.g., full-text search, fuzzy matching).
