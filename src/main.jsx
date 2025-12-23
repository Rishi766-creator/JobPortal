import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SavedJobsProvider } from './context/SavedJobsContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { JobProvider } from './context/JobsContext';
import { ApplicationProvider } from './context/ApplicationContext.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AuthProvider>
    <SavedJobsProvider >
      <JobProvider>
        <ApplicationProvider>
      <BrowserRouter>
      
        <App />
      </BrowserRouter>
      </ApplicationProvider>
      </JobProvider>
    </SavedJobsProvider>
    </AuthProvider>
  </StrictMode>

)
