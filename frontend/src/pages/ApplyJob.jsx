import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyJob = () => {
  const nav = useNavigate();

  const [resumeFile, setResumeFile] = useState(null);
  const [letterFile, setLetterFile] = useState(null);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handleLetterChange = (event) => {
    const file = event.target.files[0];
    setLetterFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    setResumeFile(null);
    setLetterFile(null);

    // //Reset input values
    document.getElementById('resume').value = '';
    document.getElementById('letter').value = '';
  };

  const handleGoBack = () => {
    nav('/jobs');
  };

  return (
    <div className="container">
      <div>
        <button type="button" className="btn btn-secondary mt-2" onClick={handleGoBack}>
          Back
        </button>
        <h1 className="text-center mt-5">Apply for a Job</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">
            Resume:
          </label>
          <input
            type="file"
            className="form-control"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="letter" className="form-label">
            Application Letter:
          </label>
          <input
            type="file"
            className="form-control"
            id="letter"
            accept=".pdf,.doc,.docx"
            onChange={handleLetterChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
