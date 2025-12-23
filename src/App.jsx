import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';
import RecruiterRoute from './components/RecruiterRoute';
import CandidateRoute from './components/CandidateRoute';
import EditJob from './pages/EditJob';
import RecruiterDashboard from './pages/RecruiterDashboard';
import { useAuth } from './context/AuthContext';
import { SavedJobsProvider } from './context/SavedJobsContext';

function App(){
  const {user}=useAuth();
  return(
    <SavedJobsProvider key={user?.email||"guest"}>
    
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/jobs' element={<Jobs />}></Route>
      <Route path="/jobs/:id" element={<JobDetails />}></Route>
      <Route path="/dashboard" element={<CandidateRoute><Dashboard /></CandidateRoute>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/post-job" element={<RecruiterRoute><PostJob /></RecruiterRoute>}></Route>
      <Route path="/edit-job/:id" element={<RecruiterRoute><EditJob /></RecruiterRoute>}></Route>
      <Route path="/recruiter/dashboard" element={<RecruiterRoute><RecruiterDashboard /></RecruiterRoute>}></Route>
      </Routes>
    </SavedJobsProvider>

    
    

  
  )

}
export default App;