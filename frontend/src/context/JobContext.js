import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const JobContext = createContext();

export function JobProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [jobs, setJobs] = useState([]);

  // AddJob
  const addJob = (title, company_name, location, description, user_id) => {
    fetch('/jobs/addjob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, company_name: company_name, location: location, description: description, user_id: user_id }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          nav('/jobs');
          Swal.fire('Success', response.success, 'success');
          setOnChange(!onChange);
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      });
  };

  // Delete Job
  const deleteJob = (id) => {
    fetch(`/jobs/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!onChange);
        console.log(response);
        nav('/');
        Swal.fire('Success', 'Delete success', 'success');
        nav('/Jobs');
      });
  };

  //Edit job

  const editJob = (title, company_name, location, description, user_id) => {

    fetch(`/jobs/editjob/:id`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, company_name: company_name, location: location, description: description, user_id: user_id }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/AddJob");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };

  //Search jobs
  const searchJob = () => {
    fetch('/jobs/search', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        setJobs(response);
      });
  };

  useEffect(() => {
    searchJob();
  }, [onChange]);


  // Fetch jobs
  const fetchJobs = () => {
    fetch('/myjobs', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        setJobs(response);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [onChange]);

  const contextData = {
    jobs,
    deleteJob,
    addJob,
    editJob,
    searchJob,
    fetchJobs,
  };

  return <JobContext.Provider value={contextData}>
      {children}
    </JobContext.Provider>;
}
