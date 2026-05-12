# 📝 Task Management (MERN)

A full‑stack Task Management application built with the **MERN stack** (MongoDB, ExpressJS, ReactJS, Node.js).  
This project allows users to create, update, complete, and delete tasks with a clean UI and robust backend.

---

## 🚀 Features

### Backend
- **Stack:** MongoDB, ExpressJS
- **Controller:** Task controller with logic for:
  - Creating tasks
  - Updating tasks
  - Completing tasks
  - Deleting tasks
  - Fetching all tasks
- **Middleware:**
  - Title validation (5–50 characters, non‑empty)
  - Task verification (valid task ID check)
- **Validator:**
  - Title validator (length + emptiness)
- **Utilities:**
  - Custom `ApiError` and `ApiResponse` classes for consistent responses
  - Async handler wrapper to avoid repetitive `try/catch`

### Frontend
- **Stack:** ReactJS
- **Libraries:**
  - `react-hot-toast` for notifications
  - `lucide-react` for icons
  - `Zustand` for global state management
  - `TailwindCSS` for styling
  - `axios` for API calls

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/Utkarsh-Sharan/task-management.git
   cd task-management
   ```
2. **Backend Setup**
   ```
   cd Backend
   npm install
   npm run dev
   ```
3. **Frontend Setup**
   ```
   cd Frontend
   npm install
   npm run dev
   ```

---

## 📸 Screenshots

<img width="1895" height="897" alt="image" src="https://github.com/user-attachments/assets/7dbd390c-6380-4f7e-8997-42b4457c8624" />

<img width="1895" height="897" alt="image" src="https://github.com/user-attachments/assets/947dd36c-dbbc-428e-9539-7ab8a7136730" />

<img width="362" height="792" alt="image" src="https://github.com/user-attachments/assets/242d1d6b-1889-4f9d-aaec-f02ced3ce6af" />
