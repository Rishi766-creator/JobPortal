# Job Portal Application (Frontend)

A fully functional **Job Portal web application** built using **React.js**, demonstrating real-world frontend development concepts such as authentication, role-based access, state management, routing, and deployment.

---

##  Live Demo
*(Add your Vercel deployment link here)*

---

##  Tech Stack

- **React.js**  
- **React Router DOM**  
- **Context API**  
- **Tailwind CSS**  
- **LocalStorage**  
- **Vercel** (Deployment)

---

##  Project Overview

This project simulates a real-world job portal where **Candidates** can browse and apply for jobs, and **Recruiters** can post and manage job listings.  
The application is built completely on the frontend to showcase strong React fundamentals and production-ready state handling.

---

##  User Roles

### Candidate
- Browse available jobs  
- Save jobs  
- Apply for jobs  
- View applied jobs  
- Access candidate dashboard  

### Recruiter
- Post new jobs  
- Edit existing jobs  
- View posted jobs  
- Access recruiter dashboard  

---

##  Features

### Authentication
- **Login** and **Register** functionality  
- Role selection (**Candidate** / **Recruiter**)  
- User session stored using **localStorage**  
- Logout functionality  
- Protected routes based on user role  

### Routing and Navigation
- Client-side routing using **React Router**  
- Role-based route protection (**CandidateRoute** / **RecruiterRoute**)  
- Dynamic routes for job details and job editing  
- Responsive navigation bar with mobile menu  

### Job Management
- Recruiters can post new jobs  
- Recruiters can edit existing job postings  
- Job data managed globally using **Context API**  

### Job Applications
- Candidates can apply for jobs  
- Duplicate applications are prevented  
- Applications stored recruiter-wise  
- Applied jobs displayed:
  - On job cards with **Applied** label  
  - In candidate dashboard  

### Saved Jobs
- Candidates can save and unsave jobs  
- Saved jobs persist across page reloads  
- Saved jobs visible in dashboard  

### Dashboards

#### Candidate Dashboard
- View saved jobs  
- View applied jobs  

#### Recruiter Dashboard
- View posted jobs  
- Manage job listings  

### State Management
- **Context API** for global state management  
- Separate contexts for authentication, jobs, saved jobs, and applications  
- Handles null states and first-render edge cases safely  

### UI and UX
- Fully responsive design  
- Clean and modern user interface  
- Styled using **Tailwind CSS**  
- Mobile-friendly layout  

### Error Handling and Stability
- Safe access to context values  
- Prevents crashes on first render  
- Handles production-level edge cases  
- Debugged and fixed production-only issues  

---

## 📂 Project Structure


src/
├── components/
├── context/
├── pages/
├── App.jsx
├── main.jsx
└── index.css



---


## ▶️ Run Locally

```bash
git clone 
cd job-portal
npm install
npm run dev
