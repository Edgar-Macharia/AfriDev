import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { JobContext } from '../context/JobContext';

export default function Jobs() {
  const { jobs, fetchJobs, deleteJob, editJob } = useContext(JobContext);

  const { id } = useParams();
  const singleJob = jobs && jobs.find((job) => job.id === id);
  console.log(singleJob);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleEdit = () => {
    editJob();
  };

  const handleDelete = () => {
    deleteJob();
  };

  return (
    <>
      <h1>Jobs</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul className="list-group mx-5">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div>
                <h5>{job.title}</h5>
                <p>Company: {job.company_name}</p>
                <p>Location: {job.location}</p>
                <p>{job.description}</p>
                <Link
                  to={`/applyjob/${job.id}`}
                  className="btn btn-success btn-sm mt-2"
                >
                  Apply Job
                </Link>
              </div>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleEdit(job.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
