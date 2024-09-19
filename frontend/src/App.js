import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home'
import About from './pages/About';
import Search from './pages/Search';
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import AddJob from './pages/ AddJob';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import ApplyJob from './pages/ApplyJob';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <JobProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='jobs' element={<Jobs />} />
                <Route path='addjob' element={<AddJob />} />
                <Route path='about' element={<About />} />
                <Route path='search' element={<Search />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='login' element={<Login />} />
                <Route path='contact' element={<Contact />} />
                <Route path='profile' element={<Profile />} />
                <Route path='applyjob/:id' element={<ApplyJob />} />
              </Route>
            </Routes>
          </JobProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
