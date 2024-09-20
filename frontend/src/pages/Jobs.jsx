import React, { useState, useEffect } from "react";



export default function Jobs() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const LIMIT = 10;

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  // const { id } = useParams();
  // const singleJob = jobs && jobs.find((job) => job.id === id);
  // console.log(singleJob);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://api.crackeddevs.com/v1/get-jobs?limit=${LIMIT}`,
          {
            headers: {
              "api-key": `${API_KEY}`,
            },
          }
        );
        const data = await response.json();
        setJobs(data);
        console.log("data: ", data);
        setLoading(false);
      } catch (error) {
        console.log("HTTP-Error: " + error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, [API_KEY]);

  return (
    <div>
      <h1 className="ms-5">Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container bg-light">
          <div className="row">
            {jobs.map((job) => (
              <div className="col-md-6" key={job.id}>
                <ul className="list-group mx-5">
                  <li className="list-card m-2 me-3 list-group-item d-flex justify-content-between align-items-start shadow-sm">
                    <div>
                      <span className="d-flex justify-content-start">
                        <img className="h-25 w-25 object-fit border-rounded" src={job.logo_url} alt="logo"></img>
                        <h5 className="pt-4 ps-2">{job.title}</h5>
                      </span>
                      <p>{job.country_iso || "Remote"}</p>
                      <span className="d-flex justify-content-between">
                      <p className="text-decoration-underline">{job.company}</p>
                      <p>just now</p>
                      </span>
                      {/* <Link
                      to={`/applyjob/${job.id}`}
                      className="btn btn-success btn-sm mt-2"
                    >
                      Apply Job
                    </Link> */}
                    </div>
                    <div>
                      <button className="btn btn-success btn-sm me-2">
                        Apply
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
