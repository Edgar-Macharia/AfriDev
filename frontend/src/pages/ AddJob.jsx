import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { JobContext } from '../context/JobContext';

export default function AddJob() {

  const {current_user} = useContext(AuthContext)
  const { addJob } = useContext(JobContext);

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform job posting logic
    addJob(jobTitle, companyName, location, jobDescription, current_user.id);

    // Reset form inputs
    setJobTitle('');
    setJobDescription('');
    setCompanyName('')
    setLocation('')
  };

  return (
    <div className="container">
      {current_user && current_user?
        <> 
      <h1 className="text-center mt-4">Add Job</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="jobTitle" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="jobDescription" className="form-label">
                Job Description
              </label>
              <textarea
                className="form-control"
                id="jobDescription"
                rows="5"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Post Job
            </button>
          </form>
        </div>
      </div>
      </>
      :
      <div>Please log in</div>
}
    </div>
  );
}
